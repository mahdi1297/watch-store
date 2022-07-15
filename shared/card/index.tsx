import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  id?: any;
  path: string;
  title: string;
  price: number;
  thumbnail: string;
};

const Card = ({ path = "/", title, price, thumbnail }: Props) => {
  return (
    <div className="card_wrapper">
      <Link href={`/product/${path}`}>
        <a>
          <div className="related_prodcut-swiper-items">
            <div className="header">
              <div className="thumbnail">
                <Image
                  alt={title}
                  src={thumbnail}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
            <div className="content">
              <h3>{title}</h3>
              <div className="price">{price}</div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default Card;
