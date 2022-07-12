import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Brand, brandsModel } from "./brands.model";
import { BEST_BRANDS } from "@consts/static";

/**
 *
 * @returns Brand list
 */
const HomeViewBrands = () => {
  return (
    <div className="home_view-brands">
      <div className="title">
        <p>{BEST_BRANDS}</p>
      </div>
      <div className="brand-list">
        {brandsModel?.map((brand: Brand) => (
          <div key={brand.id}>
            <Link href={brand.path}>
              <a>
                <Image src={brand.image} alt="" height="90" width="100" />
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeViewBrands;
