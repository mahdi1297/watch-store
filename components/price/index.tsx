import React from "react";

type Props = {
  price: number;
  specificClass?: string;
  hasSale?: boolean;
  saledPrice?: number;
  salePercent?: number;
};

const Price: React.FC<Props> = ({
  price,
  hasSale = false,
  salePercent,
  saledPrice,
  specificClass,
}) => {
  return (
    <>
      <div className={`price__body ${specificClass}`}>
        <p className={hasSale ? "sale-color" : ""}>
          {hasSale ? price : `${price} تومان `}
        </p>
        {hasSale && (
          <div className="price__body-sale-wrapper">
            <span></span>
            <div className="price-percent">{salePercent && salePercent}%</div>
            <p className="price-sale">{saledPrice}تومان</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Price;
