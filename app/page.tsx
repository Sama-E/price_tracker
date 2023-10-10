import Image from "next/image";
import MarketCard from "@/components/MarketCard";
import TopHeadlines from "@/components/TopHeadlines";

const alpha = require('alphavantage')({ key: 'UMXWBLRHRBKE2SIJ' });

const Home = async () => {

  let date = new Date().toLocaleDateString();

//AlphaVantage

//BTC
// const BTC = alpha.forex.rate('btc', 'usd').then((data) => {
  // const From_Currency_Code = data['Realtime Currency Exchange Rate']["1. From_Currency Code"];
  // const To_Currency_Code = data['Realtime Currency Exchange Rate']["3. To_Currency Code"];
  // const Exchange_Rate = data['Realtime Currency Exchange Rate']["5. Exchange Rate"]; 
  // const Bid_Price = data['Realtime Currency Exchange Rate']["8. Bid Price"];
  // const Ask_Price = data['Realtime Currency Exchange Rate']["9. Ask Price"];

  // const data1 = data['Realtime Currency Exchange Rate'];

  // const values = {
  //   From_C_Code: From_Currency_Code,
  //   To_C_Code: To_Currency_Code, 
  //   XRate: Exchange_Rate, 
  //   Bid: Bid_Price, 
  //   Ask: Ask_Price
  // } 
//   console.log(data);
// })

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
        </div>
      </section>

      <div className="flex justify-center max-xl:flex-col gap-16">
        <div className="my-7 flex p-10">
          <div className="flex gap-5 flex-wrap">
            <MarketCard />
            <MarketCard />
            <MarketCard />
            <MarketCard />
          </div>
        </div>
      </div>

      <section className="trending-section">
        <h2 className="section-text pl-20">In the News</h2>
        <p className="section2-text pl-20">Top Headlines</p>

        <div className="flex flex-wrap justify-center content-center gap-x-6 gap-y-12 p-10">

            <TopHeadlines />

        </div>
      </section>

    </>
  )
}

export default Home;