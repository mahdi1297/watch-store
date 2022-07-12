import React from "react";
import { Home, Menu, Search } from "react-feather";

const Header = () => {
  return (
    <div className="container">
      <header>
        <div>
          <Menu />
        </div>
        <div>
          <Home />
        </div>
        <div>
          <Search />
        </div>
      </header>
    </div>
  );
};

export default React.memo(Header);
