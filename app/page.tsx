import Image from "next/image";
import TopHeadlines from "@/components/TopHeadlines";

const Home = async () => {

  let date = new Date().toLocaleDateString();

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

            <h1 className="head-text">
              Unleash the Power of  
              <span className="text-emerald-600"> Today's Market & News</span>
            </h1>

            <p className="mt-6">
              Track my ETFs, BTC and news to help you convert, engage, and retain more.
            </p>
            
          </div>
            
        </div>
      </section>

      <section className="trending-section">
        <h2 className="section-text pl-20">In the News - {date}</h2>
        <p className="section2-text pl-20">Top Headlines</p>

        <div className="flex flex-wrap justify-center content-center gap-x-6 gap-y-12 p-10">

            <TopHeadlines />

        </div>
      </section>

    </>
  )
}

export default Home;