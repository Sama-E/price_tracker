import Image from "next/image";
import NewsAPI from "newsapi";
import MarketCard from "@/components/MarketCard";
import ArticleCard from "@/components/ArticleCard";

const alpha = require('alphavantage')({ key: 'UMXWBLRHRBKE2SIJ' });

const Home = async () => {

  let date = new Date().toLocaleDateString();

//AlphaVantage

//BTC
const BTC = alpha.forex.rate('btc', 'usd').then((data) => {
  const From_Currency_Code = data['Realtime Currency Exchange Rate']["1. From_Currency Code"];
  const To_Currency_Code = data['Realtime Currency Exchange Rate']["3. To_Currency Code"];
  const Exchange_Rate = data['Realtime Currency Exchange Rate']["5. Exchange Rate"]; 
  const Bid_Price = data['Realtime Currency Exchange Rate']["8. Bid Price"];
  const Ask_Price = data['Realtime Currency Exchange Rate']["9. Ask Price"];

  const values = {
    From_C_Code: From_Currency_Code,
    To_C_Code: To_Currency_Code, 
    XRate: Exchange_Rate, 
    Bid: Bid_Price, 
    Ask: Ask_Price
  } 
  return (values);
})

// //Invesco QQQ
// const QQQ = alpha.data.quote(`QQQ`).then((data) => {
//   return data;
// });

// //Schwab Total Stock Market Index
// const SWTSX = alpha.data.quote(`SWTSX`).then((data) => {
//   return data;
// });

// //Black Rock iShares Russell 3000
// const IWV = alpha.data.quote(`IWV`).then((data) => {
//   return data;
// });

// //SPDR Gold Shares (GLD)
// const GLD = alpha.data.quote(`GLD`).then((data) => {
//   return data;
// });

//NewsAPI
const newsapi = new NewsAPI('4ed6e10312234189a51376c6f48837c9');
// To query /v2/top-headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them
// newsapi.v2.topHeadlines({
//   category: 'business',
//   language: 'en',
//   country: 'us'
// }).then(response => {
//   console.log(response);
// });



  return (
    <>

      <section className="px-6 md:px-20 py-24">
        <div className="flex max-xl:flex-col gap-16">
          <div className="flex flex-col justify-center">
            
            <p className="small-text">
              Market Snap Shot:
              <Image
                src="/assets/icons/arrow-right.svg"
                alt="arrow-right"
                width={16}
                height={16}
              />
            </p>
            
          </div>
            <p>{date}</p>
            <div className="my-7 flex flex-col gap-5">
              <div className="flex gap-5 flex-wrap">
                <MarketCard />
                <MarketCard />
                <MarketCard />
                <MarketCard />
              </div>
            </div>
        </div>
      </section>

      <section className="trending-section">
        <h2 className="section-text">In the News</h2>

        <div className="flex flex-wrap gap-x-8 gap-y-16">
        <div className="py-14 flex flex-col gap-2 w-full">
          <p className="section2-text">Top Headlines</p>

          <div className="flex flex-wrap gap-10 mt-7 w-full">
            <ArticleCard />
          </div>

        </div>
        </div>
      </section>

    </>
  )
}

export default Home;