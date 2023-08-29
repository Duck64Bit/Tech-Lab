import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/3.jpeg";
import img2 from "../assets/4.jpeg";
import img3 from "../assets/5.jpeg";
import img4 from "../assets/6.jpeg";


const Services = () => {
  return (
    <div>
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        interval={1700}
      >
        <div>
          <img src={img1} alt="Item1" />
          <p className="legend">Next-Gen</p>
        </div>
        <div>
          <img src={img2} alt="Item3" />
          <p className="legend">AI-Supported</p>
        </div>
        <div>
          <img src={img3} alt="Item3" />
          <p className="legend">Seemless Performance</p>
        </div>
        <div>
          <img src={img4} alt="Item3" />
          <p className="legend">Modern Enciphering</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Services;
