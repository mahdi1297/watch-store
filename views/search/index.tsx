import React from "react";
import SearchViewList from "./components/main";
import SearchViewSidebar from "./components/sidebar";

const SearchView = () => {



  return (
    <div className="search_view">
      <div className="container">
        <div className="search_view-wrapper">
          <SearchViewSidebar />
          <SearchViewList />
        </div>
      </div>
    </div>
  );
};

export default SearchView;
