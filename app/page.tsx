import Image from "next/image";
const alpha = require('alphavantage')({ key: 'UMXWBLRHRBKE2SIJ' });

const Home = async () => {

const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let currentDate = `${year}-${month}-${day}`;
console.log(currentDate);

//BTC
alpha.forex.rate('btc', 'usd').then((data) => {
  console.log(data);
})

alpha.forex.rate('xag', 'usd').then((data) => {
  console.log(data);
})

//Invesco QQQ
alpha.data.quote(`QQQ`).then((data) => {
  console.log(data);
});

//Schwab Total Stock Market Index
alpha.data.quote(`SWTSX`).then((data) => {
  console.log(data);
});

//Black Rock iShares Russell 3000
alpha.data.quote(`IWV`).then((data) => {
  console.log(data);
});

//SPDR Gold Shares (GLD)
alpha.data.quote(`GLD`).then((data) => {
  console.log(data);
});



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

        </div>
      </section>

      <section className="trending-section">
        <h2 className="section-text">Trending</h2>

        <div className="flex flex-wrap gap-x-8 gap-y-16">
          News Feed
        </div>
      </section>

    </>
  )
}

export default Home;