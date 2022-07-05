import Link from "next/link";
import React from "react";
import { Brand, brandsModel } from "./brands.model";

const HomeViewBrands = () => {
  return (
    <div className="home_view-brands">
      <div className="title">
        <p>برترین برند ها</p>
      </div>
      <div className="brand-list">
        {brandsModel?.map((brand: Brand) => (
          <div key={brand.id}>
            <Link href={brand.path}>
              <a>
                <img src={brand.image} />
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeViewBrands;
