import React from "react";
import "./slider.css";
import Image from "../../../assest/55.jpg";
import Image1 from "../../../assest/1.jpg";
import Image2 from "../../../assest/2.jpg";
import Image3 from "../../../assest/3.jpg";

import { Carousel } from "react-bootstrap";

// import SliderImages from "../sliderImages/index";

const Slider = () => {
  return (
    <div className="main-slider">
      {/* <div className="imgseter">
        <img src={Image} />
      </div> */}
      <Carousel className="slide">
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={Image}
            alt="First slide"
            style={{ width: "100%", height: "100vh" }}
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={Image1}
            alt="Third slide"
            style={{ width: "100%", height: "100vh" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Image2}
            alt="Third slide"
            style={{ width: "100%", height: "100vh" }}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
