import React, { useContext, useState } from "react";
import dynamic from "next/dynamic";
import { SearchContext } from "@stores/search.store";
import { useRouter } from "next/router";
import { debouncer } from "@helpers/debouncer";
import { ChevronDown } from "react-feather";
import { PRICE_RANGE } from "@consts/static";

type RangeSliderArgs = {
  min: number,
  max: number
}

const RangeSlider = dynamic(() => import("@shared/range-slider"), {
  ssr: false,
});

const SidebarPrice = () => {

  const router = useRouter();

  const [priceOpen, setPriceOpen] = useState(true);

  const searchCtx = useContext(SearchContext);

  const priceOppenToggleHandler = () => {
    setPriceOpen(!priceOpen);
  };

  const addPriceToContext = ({ min, max }: RangeSliderArgs) => {
    searchCtx.priceFilterOperator([min, max]);
  }

  const addPriceToUrl = ({ min, max }: RangeSliderArgs) => {
    router.push(`/search?min-price=${min}&max-price=${max}`);
  }

  const buttonClickHandler = debouncer(({ min, max }: RangeSliderArgs) => {
    addPriceToUrl({ min, max });
  }, 2000);

  const rangeSliderChangeHandler = ({ min, max }: RangeSliderArgs) => {
    addPriceToContext({ min, max });
    //@ts-ignore
    buttonClickHandler({ min, max });
  }

  return (
    <div className="sidebar_inner-items ">
      <div className="title" onClick={priceOppenToggleHandler}>
        {PRICE_RANGE}
        <ChevronDown />
      </div>

      <div className={`body  ${priceOpen ? "open" : "close"}`}>
        <div className="sidebar_range-slider-body">
          <RangeSlider
            min={500000}
            max={20000000}
            onChange={({ min, max }: RangeSliderArgs) =>
              rangeSliderChangeHandler({ min, max })
            }
          />
        </div>
      </div>
    </div>
  );
};

export default SidebarPrice;
