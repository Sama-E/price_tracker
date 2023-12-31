//AMAZON

export type PriceHistoryItem = {
  price: number;
};

export type User = {
  email: string;
};

export type Params = {
  id: string;
}

export type Product = {
  _id?: string;
  url: string;
  currency: string;
  image: string;
  title: string;
  currentPrice: number;
  originalPrice: number;
  priceHistory: PriceHistoryItem[] | [];
  highestPrice: number;
  lowestPrice: number;
  averagePrice: number;
  discountRate: number;
  description: string;
  category: string;
  reviewsCount: number;
  stars: number;
  isOutOfStock: Boolean;
  users?: User[];
};

export type NotificationType =
  | "WELCOME"
  | "CHANGE_OF_STOCK"
  | "LOWEST_PRICE"
  | "THRESHOLD_MET";

export type EmailContent = {
  subject: string;
  body: string;
};

export type EmailProductInfo = {
  title: string;
  url: string;
};

//NEWS

//News
export type news = {
  source: {
    id: string,
    name: string
  },
  author: string,
  title: string,
  description: string,
  url: string,
  urlToImage: string,
  publishedAt: string,
  content: string
}

//Markets

//Stock - API Vantage
//https://github.com/ricardo93borges/alphavantage-wrapper-ts#alphavantage-wrapper-ts
// export type stock = {
//     symbol: string
//     open: string
//     high: string
//     low: string
//     price: string
//     volume: string
//     latestTradingDay: string
//     previousClose: string
//     change: string
//     changePercent: string
//   }