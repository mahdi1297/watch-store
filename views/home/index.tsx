import React from "react";
import HomeViewBrands from "./components/brands";
import HomeViewHero from "./components/hero";

const HomeView = () => {
  return (
    <div className="home_view">
      <HomeViewHero />
      <HomeViewBrands />
    </div>
  );
};

export default HomeView;
