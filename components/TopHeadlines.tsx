import { getNewsTopHeadlines } from "@/app/news"
import ArticleCard from "./ArticleCard";
import { removeDuplicateData } from "@/lib/utils";

const TopHeadlines = async () => {
  const newsTop = await getNewsTopHeadlines();
  const filterArticles = removeDuplicateData(newsTop)

  return (
    <>
      {filterArticles.map((article,idx) => (
        <div key={`${article?.title}-${idx}`}>
          <ArticleCard data={article} />
        </div>
      ))}
    </>
  )
}

export default TopHeadlines