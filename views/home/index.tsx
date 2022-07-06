import React from "react";
import HomeViewBlog from "./components/blogs";
import HomeViewBrands from "./components/brands";
import HomeViewHero from "./components/hero";
import HomeViewProducts from "./components/products";

const HomeView = () => {
  return (
    <>
      <HomeViewHero />
      <div className="home_view">
        <HomeViewBrands />
        <HomeViewProducts />
        <HomeViewBlog />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
};

export default HomeView;
