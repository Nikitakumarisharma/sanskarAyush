import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosPeople } from "react-icons/io";
import Slider from "react-slick";

const images = [
  "assets/images/clients/partner1.png",
  "assets/images/clients/partner2.png",
  "assets/images/clients/partner3.png",
  "assets/images/clients/partner4.png",
  "assets/images/clients/partner5.png",
  "assets/images/clients/partner6.png",
  "assets/images/clients/partner7.png",
  "assets/images/clients/partner8.png",
  "assets/images/clients/partner9.png",
  "assets/images/clients/partner10.png",
  "assets/images/clients/partner11.png",
  "assets/images/clients/partner12.png",
  "assets/images/clients/partner13.png",
  "assets/images/clients/partner14.png",
  "assets/images/clients/partner15.png",

  
];

const sliderSettings = {
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 150,
  arrows: false,
  dots: false,
  pauseOnHover: true,
  infinite: true, // Ensures continuous loop
  centerMode: false, // Prevents extra spacing on the right
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 520,
      settings: {
        slidesToShow: 3,
      },
    },
  ],
};

const Client = () => {
  return (
    <section className="container text-center py-24 mx-auto">
   

    <Slider {...sliderSettings} className="customer-logos slider">
      {images.map((src, index) => (
        <div key={index} className="slide">
          <img src={src} alt={`Logo ${index}`} className="mx-autow-28 gap-4 " />
        </div>
      ))}
    </Slider>
    <hr className="my-4 mx-auto w-3/4" />

  </section>
  )
}

export default Client