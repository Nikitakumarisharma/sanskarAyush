import React from "react";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const CarausalTwo = () => {
  // Slider Settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <section className="relative w-full h-screen">
      {/* === Image Slider === */}
      <div className="absolute inset-0">
        <Slider {...settings} className="w-full h-full">
          <div>
            <img
              src="assets/images/bg/carausal-1.jpg"
              alt="Slide 1"
              className="w-full h-screen object-cover"
            />
          </div>
          <div>
            <img
              src="assets/images/bg/carausal-2.jpg"
              alt="Slide 2"
              className="w-full h-screen object-cover"
            />
          </div>
        </Slider>
      </div>

      {/* === Overlay === */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* === Hero Content === */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white">
        <h5 className="font-bold text-shadow-lg">
          Welcome to <span className="text-green-400">Sanskar Ayush Medicare</span>
        </h5>
        <p className="mt-4 text-lg md:text-2xl">
          Looking for Ayurvedic Products in your own brand Name
        </p>
        <div className="hero-button mb-30 wow fadeInUp mt-4 " data-wow-delay="4s">
            <Link legacyBehavior href="https://wa.me/1234567890">
    <a className="main-btn golden-btn mb-10 mr-3">Contact Us</a>
  </Link>
            </div>
      </div>
    </section>
  );
};

export default CarausalTwo;
