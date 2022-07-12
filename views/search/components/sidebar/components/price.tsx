import React, { useContext, useState } from "react";
import { ChevronDown } from "react-feather";
import dynamic from "next/dynamic";
import { SearchContext } from "@stores/search.store";


const RangeSlider = dynamic(() => import("@shared/range-slider"), {
  ssr: false,
});

const SidebarPrice = () => {
  const [priceOpen, setPriceOpen] = useState(true);

  const searchCtx = useContext(SearchContext);

  const priceOppenToggleHandler = () => {
    setPriceOpen(!priceOpen);
  };

  return (
    <div className="sidebar_inner-items ">
      <div className="title" onClick={priceOppenToggleHandler}>
        محدوده قیمت
        <ChevronDown />
      </div>
      <div className={`body  ${priceOpen ? "open" : "close"}`}>
        <div className="sidebar_range-slider-body">
          <RangeSlider
            min={500000}
            max={10000000}
            onChange={({ min, max }: { min: number; max: number }) =>
              searchCtx.priceFilterOperator([min, max])
            }
          />
        </div>
      </div>
    </div>
  );
};

export default SidebarPrice;
