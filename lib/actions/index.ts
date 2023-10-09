"use server"

import { revalidatePath } from "next/cache";
import { generateEmailBody, sendEmail } from "../nodemailer";

import { connectToDB } from "../mongoose";
import { scrapeAmazonProduct } from "../scraper";
import { getAveragePrice, getHighestPrice, getLowestPrice } from "../utils";
import { User } from "@/types";
import Product from "../models/product.model";

//Scrape and Store Product
export async function scrapeAndStoreProduct(productUrl: string) {
  if(!productUrl) return;

  try {

    connectToDB();

    const scrapedProduct = await scrapeAmazonProduct(productUrl);

    if(!scrapedProduct) return;

    let product = scrapedProduct;

    const existingProduct = await Product.findOne({ url: scrapedProduct.url });

    //If product exist in DB
    if(existingProduct) {
      const updatedPriceHistory: any = [
        ...existingProduct.priceHistory,
        { price: scrapedProduct.currentPrice }
      ]

      //Update
      product = {
        ...scrapedProduct,
        priceHistory: updatedPriceHistory,
        lowestPrice: getLowestPrice(updatedPriceHistory),
        highestPrice: getHighestPrice(updatedPriceHistory),
        averagePrice: getAveragePrice(updatedPriceHistory),
      }
    }

    //Create the first instance or new Product in DB
    const newProduct = await Product.findOneAndUpdate(
      { url: scrapedProduct.url },
      product,
      //Create new
      { upsert: true, new: true }
    );
    
    revalidatePath(`/products/${newProduct._id}`);
  } catch (error: any) {
    throw new Error(`Failed to create/update product: ${error.message}`);
  }
}

//Get Product By Id
export async function getProductById(productId: string){

  try {
    connectToDB();

    const product = await Product.findOne({_id: productId});

    if(!product) return null;

    return product;
  } catch (error: any){
    console.log(error);
  }
}

//Get all Products
export async function getAllProducts(){
  try {
    connectToDB();

    const products = await Product.find();

    return products;
  } catch (error) {
    console.log(error);
  }
}

// Add User Email to Product
export async function addUserEmailToProduct(productId: string, userEmail:string) {
  try {
    const product = await Product.findById(productId);

    if(!product) return;

    const userExists = product.users.some((user: User) => user.email === userEmail);

    if(!userExists) {
      product.users.push({ email: userEmail });

      await product.save();

      const emailContent = await generateEmailBody(product, "WELCOME");

      await sendEmail(emailContent, [userEmail]);
    }
  } catch (error) {
    console.log(error);
  }
}