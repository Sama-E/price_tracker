import { news } from '@/types'
import Image from 'next/image'
import Link from 'next/link'

const ArticleCard = ({data} : {data:news}) => {

  return (
    <Link href={data?.url} >
    <div className="product-card max-w-xs">
      <div className="product-card_img-container">
        <Image 
          // src={`${data?.urlToImage !== null ? data?.urlToImage : '/img/news-u-logo.webp'}`}
          src={data?.urlToImage}
          alt={data?.title}
          width={200}
          height={200}
          className="product-card_img"
        />
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="product-title">
          {data?.title}
        </h3>

        <div className="flex flex-col justify-between text-black text-sm font-semibold">
            <span>Author: {data?.author}</span>
            <span>Source: {data?.source.name}</span>
            <span>Date: {new Date(data?.publishedAt).toDateString()}</span>
        </div>

        <p className="text-black text-md ">
          {data?.description}
        </p>
      </div>
    </div>
    </Link>
  )
}

export default ArticleCard;