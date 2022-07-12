import React from "react";
import SidebarBrand from "./components/brand";
import SidebarPrice from "./components/price";

const SearchViewSidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_inner">
        <SidebarPrice />
        <SidebarBrand />
      </div>
    </div>
  );
};

export default SearchViewSidebar;
