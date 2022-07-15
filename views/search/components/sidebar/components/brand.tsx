import React, { useContext, useState } from "react";
import Checkbox from "@shared/form/checkbox";
import { SearchContext } from "@stores/search.store";
import { BrandSearch, brandsSearchModel } from "@models/search.model";
import { ChevronDown } from "react-feather";
import { BRANDS } from "@consts/static";

const SidebarBrand = () => {

  const [brandOpen, setBrandOpen] = useState(true);
  const [brands, setBrands] = useState<string[]>([])

  const searchCtx = useContext(SearchContext);

  const brandOppenToggleHandler = () => {
    setBrandOpen(!brandOpen);
  };

  const addBrandsToCtx = (brandName: string) => {
    if (brands.includes(brandName)) {
      const filterBrands = brands.filter((s: any) => s !== brandName)

      setBrands(filterBrands);

      searchCtx?.brandFilterOperator(filterBrands)
      return;
    }

    setBrands([...brands, brandName])
    searchCtx.brandFilterOperator([...brands, brandName]);
  }

  const checkboxChangeHandler = (e: any, brandName: string) => {
    addBrandsToCtx(brandName);
  };

  return (
    <div className="sidebar_inner-items">
      <div className="title" onClick={brandOppenToggleHandler}>
        {BRANDS}
        <ChevronDown />
      </div>
      <div className={`body ${brandOpen ? "open" : "close"}`}>
        <div className="sidebar_brands-body">
          {brandsSearchModel?.map((brand: BrandSearch) => (
            <div key={brand.id}>
              <Checkbox
                name={brand.name}
                label={brand.label}
                onchange={checkboxChangeHandler}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SidebarBrand;
