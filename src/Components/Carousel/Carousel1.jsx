import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./Carousel1.css";
export const SlideCorousel1 = () => {
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={125}
      totalSlides={3}
    >
      <Slider className="box_div">
        <Slide index={0}>
          <img
            src="https://static.pbcdn.in/cdn/images/home-v1/tax-banner.png"
            alt=""
          />
          <img
            src="https://static.pbcdn.in/cdn/images/home/save-tax-on-health-insurance.png"
            alt=""
          />
          <img
            src="https://static.pbcdn.in/cdn/images/home-v1/banner-24x7.png"
            alt=""
          />
        </Slide>
        <Slide index={1}>
          <img
            src="https://static.pbcdn.in/cdn/images/home-v1/appkisidehai-banner.png"
            alt=""
          />
          <img
            src="https://static.pbcdn.in/cdn/images/home-v1/pbaskci_banner_1.png"
            alt=""
          />
          <img
            src="https://static.pbcdn.in/cdn/images/home-v1/made-in-india-banner.png"
            alt=""
          />
        </Slide>
        <Slide index={2}>
          <img
            src="https://static.pbcdn.in/cdn/images/home-v1/beware-of-fraudsters.png"
            alt=""
          />
          <img
            src="https://static.pbcdn.in/cdn/images/home-v1/tax-banner.png"
            alt=""
          />
          <img
            src="https://static.pbcdn.in/cdn/images/home/save-tax-on-health-insurance.png"
            alt=""
          />
        </Slide>
      </Slider>
      <ButtonBack className="btn_change">&#8592;</ButtonBack>
      <ButtonNext className="btn_change">&#8594;</ButtonNext>
    </CarouselProvider>
  );
};
