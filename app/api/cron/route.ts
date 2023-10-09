import { NextResponse } from "next/server";

import Product from "@/lib/models/product.model";
import { connectToDB } from "@/lib/mongoose";
import { scrapeAmazonProduct } from "@/lib/scraper";
import { getAveragePrice, getEmailNotifType, getHighestPrice, getLowestPrice } from "@/lib/utils";
import { generateEmailBody, sendEmail } from "@/lib/nodemailer";

//1. Scrape latest product details and update DB
//2. Check Each Product Status and Send Email
export async function GET(request: Request) {
  try {
    connectToDB();

    const products = await Product.find({});

    if(!products) throw new Error("No products found")

    //1. Scrape latest product details and update DB
    const updatedProducts = await Promise.all(
      products.map(async (currentProduct) => {
        const scrapedProduct = await scrapeAmazonProduct(currentProduct.url);
        
        if(!scrapedProduct) throw new Error("No products found")

        const updatedPriceHistory = [
          ...currentProduct.priceHistory,
          { price: scrapedProduct.currentPrice }
        ]
  
        //Update
        const product = {
          ...scrapedProduct,
          priceHistory: updatedPriceHistory,
          lowestPrice: getLowestPrice(updatedPriceHistory),
          highestPrice: getHighestPrice(updatedPriceHistory),
          averagePrice: getAveragePrice(updatedPriceHistory),
        }
  
      //Create the first instance or new Product in DB
      const updatedProduct = await Product.findOneAndUpdate(
        { url: scrapedProduct.url },
        product,
      );

      //2. Check Each Product Status and Send Email

      //Email Notification type
      const emailNotifType = getEmailNotifType(
        scrapedProduct,
        currentProduct
      );

      //If Email Notification type exits and user exists
      if (emailNotifType && updatedProduct.users.length > 0) {

        //Get Product info
        const productInfo = {
          title: updatedProduct.title,
          url: updatedProduct.url,
        };

        // Construct emailContent
        const emailContent = await generateEmailBody(productInfo, emailNotifType);

        // Get array of user emails
        const userEmails = updatedProduct.users.map((user: any) => user.email);
        
        // Send email notification
        await sendEmail(emailContent, userEmails);
      }

      return updatedProduct;

      })
    );

    return NextResponse.json({
      message: "Ok",
      data: updatedProducts,
    });

  } catch (error : any) {
    throw new Error(`Error in GET: $(error)`)
  }
}