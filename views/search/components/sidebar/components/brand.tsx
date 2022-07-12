import { BrandSearch, brandsSearchModel } from "@models/search.model";
import Checkbox from "@shared/form/checkbox";
import { SearchContext } from "@stores/search.store";
import React, { useContext, useState } from "react";
import { ChevronDown } from "react-feather";

const SidebarBrand = () => {
  const [brandOpen, setBrandOpen] = useState(true);
  const [brands, setBrands] = useState<string[]>([])

  const searchCtx = useContext(SearchContext);

  const brandOppenToggleHandler = () => {
    setBrandOpen(!brandOpen);
  };


  const checkboxOnchangeHandler = (e: any, brandName: string) => {

    if (brands.includes(brandName)) {
      const filterBrands = brands.filter((s: any) => s !== brandName)
      setBrands(filterBrands);

      searchCtx?.brandFilterOperator(filterBrands)

      return;
    }

    setBrands([...brands, brandName])
    searchCtx.brandFilterOperator([...brands, brandName])
  };

  //
  return (
    <div className="sidebar_inner-items">
      <div className="title" onClick={brandOppenToggleHandler}>
        برند ها
        <ChevronDown />
      </div>
      <div className={`body ${brandOpen ? "open" : "close"}`}>
        <div className="sidebar_brands-body">
          {brandsSearchModel?.map((brand: BrandSearch) => (
            <div key={brand.id}>
              <Checkbox
                name={brand.name}
                label={brand.label}
                onchange={checkboxOnchangeHandler}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SidebarBrand;
