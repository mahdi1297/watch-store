import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
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
  const [minPrice, setMinPrice] = useState<any>(null);
  const [maxPrice, setMaxPrice] = useState<any>(null);

  useEffect(() => {
    const getPricesFromUrl = () => {
      const minPriceQuery = router.query["min-price"];
      const maxPriceQuery = router.query["max-price"];

      setMinPrice(minPriceQuery ? minPriceQuery : 500000)
      setMaxPrice(maxPriceQuery ? maxPriceQuery : 20000000)
    }

    getPricesFromUrl();
  }, [router])



  const priceOppenToggleHandler = () => {
    setPriceOpen(!priceOpen);
  };

  const addPriceToUrl = ({ min, max }: RangeSliderArgs) => {
    router.push({
      query: { ...router.query, "min-price": min, "max-price": max },
    });
  }

  const buttonClickHandler = debouncer(({ min, max }: RangeSliderArgs) => {
    addPriceToUrl({ min, max });
  }, 2000);

  const rangeSliderChangeHandler = useMemo(() => {
    return ({ min, max }: RangeSliderArgs) => {
      //@ts-ignore
      buttonClickHandler({ min, max });
    }
  }, [buttonClickHandler])

  return (
    <div className="sidebar_inner-items ">
      <div className="title" onClick={priceOppenToggleHandler}>
        {PRICE_RANGE}
        <ChevronDown />
      </div>

      <div className={`body  ${priceOpen ? "open" : "close"}`}>
        <div className="sidebar_range-slider-body">
          {minPrice && maxPrice &&
            <RangeSlider
              min={minPrice}
              max={maxPrice}
              onChange={({ min, max }: RangeSliderArgs) =>
                rangeSliderChangeHandler({ min, max })
              }
            />
          }
        </div>
      </div>
    </div>
  );
};

export default memo(SidebarPrice);
