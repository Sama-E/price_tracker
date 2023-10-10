import Image from 'next/image';

const MarketCard = () => {
  return (
    <div className={`price-info_card`}>
      <p className="text-base text-black-100">Title</p>

      <div className="flex gap-1">
        {/* <Image src="" alt="title" width={18} height={18} /> */}

        <p className="text-2xl font-bold text-secondary">$ Current Price</p>
      </div>
    </div>
  )
}

export default MarketCard;