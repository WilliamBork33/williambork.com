import React from 'react';
import Carousel from "react-bootstrap/Carousel";
import Slide1 from "../../assets/img/carousel/slide1.webp";
import Slide2 from "../../assets/img/carousel/taipei.jpg";
import Slide3 from "../../assets/img/carousel/monterrey.jpg";
import ScrollDown from "../scroll-down/scroll-down.component";
import "./carousel.styles.css";

function MyCarousel () {
  return (
    <div id="home">
      <Carousel controls={false} indicators interval={2500} pause={false}>
        <Carousel.Item>
          <img className="d-block w-100 custom-img" src={Slide2} alt="Computer screen at night" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 custom-img" src={Slide3} alt="Taipei skyline as seen from the surrounding mountains" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 custom-img" src={Slide1} alt="Monterrey city and Cerro de la Silla" />
        </Carousel.Item>
      </Carousel>
      <ScrollDown />
    </div>
  );
};

export default MyCarousel;