import React from "react";
import HomeViewBlog from "./blogs";
import HomeViewBrands from "./brands";
import HomeViewHero from "./hero";
import HomeViewProducts from "./products";

const HomeView = () => {
  return (
    <>
      <HomeViewHero />
      <div className="home_view">
        <HomeViewBrands />
        <HomeViewProducts />
        <HomeViewBlog />
      </div>
    </>
  );
};

export default HomeView;
