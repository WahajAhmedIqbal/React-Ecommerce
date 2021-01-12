import React from "react";
import "./layoutStyle.css";
import Slider from "./slider";
import Cards from "./card";
import Deal from "./deal";

const Layout = () => {
  return (
    <div className="layout_main">
      <div className="slider">
        <Slider />
        <Cards />
        <Deal />
      </div>
    </div>
  );
};

export default Layout;
