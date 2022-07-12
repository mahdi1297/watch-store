import { ProductModel } from "@models/product.model";
import Card from "@shared/card";
import { watchesData } from "data/watch";
import React, { useEffect, useState } from "react";
import { Tab, TabsEnum, tabsModel } from "./tabs.mode";

const HomeViewProducts = () => {
  const [selectedTab, setSelectedTab] = useState(TabsEnum.LAST_PRODUCTS);
  const [data, setData] = useState<Partial<ProductModel[]>>();

  useEffect(() => {
    const getProductsData = async () => {
      let produts = watchesData;

      switch (selectedTab) {
        case TabsEnum.DISCOUNTS:
          produts = watchesData.filter((s) => s.hasSale === true);
          break;
      }
      setData(produts);
    };

    getProductsData();
  }, [selectedTab]);

  const selectTabHandler = (tab: any) => {
    setSelectedTab(tab);
  };

  return (
    <div className="home_view-products">
      <div className="tabs">
        <ul>
          {tabsModel?.map((tab: Tab) => (
            <li
              key={tab.id}
              className={tab.title === selectedTab ? "active" : "not_active"}
              onClick={() => selectTabHandler(tab.title)}
            >
              {tab.title}
            </li>
          ))}
        </ul>
      </div>

      <div className="home_view-products-wrapper">
        {data?.map((product: any) => (
          <Card
            key={product.id}
            path={product.slug}
            title={product.title}
            price={product.price}
            thumbnail={product.main_image}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeViewProducts;
