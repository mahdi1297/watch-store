import { TOOMAN } from "@consts/static";
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
        <p className={hasSale ? "sale-color" : "not-sale-color"}>
          {hasSale ? price : `${price} ${TOOMAN} `}
        </p>
        {hasSale && (
          <div className="price__body-sale-wrapper">
            <div className="price-cross-line"></div>
            <div className="price-percent">{salePercent && salePercent}%</div>
            <p className="price-sale">
              {saledPrice}
              {TOOMAN}
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Price;
