//News
export const getNewsTopHeadlines = async () => {
  const newsData = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${process.env.NewsAPI_KEY}`, {cache:"no-store"})

  return newsData.json()
}