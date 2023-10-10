import Image from "next/image";

Image

const ArticleCard = () => {
  return (
    <div className="product-card">
    <div className="product-card_img-container">
      <Image 
        src=""
        alt="title"
        width={200}
        height={200}
        className="product-card_img"
      />
    </div>

    <div className="flex flex-col gap-3">
      <h3 className="product-title">
        title
      </h3>

      <div className="flex justify-between text-black text-sm font-semibold">
          <span>Author</span>
          <span>date</span>
      </div>

      <p className="text-black opacity-50 text-md capitalize">
        article
      </p>
    </div>
  </div>
  )
}

export default ArticleCard;