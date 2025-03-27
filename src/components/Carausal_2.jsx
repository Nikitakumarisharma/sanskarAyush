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
              src="assets/images/bg/carausal-1.png"
              alt="Slide 1"
              className="w-full h-screen object-cover"
            />
          </div>
          <div>
            <img
              src="assets/images/bg/carausal-2.png"
              alt="Slide 2"
              className="w-full h-screen object-cover"
            />
          </div>
        </Slider>
      </div>

      {/* === Overlay === */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* === Hero Content === */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-6">
        <p className="font-bold text-shadow-lg text-lg sm:text-xl md:text-2xl lg:text-5xl">
          Welcome to <span className="text-green-400">Sanskar Ayush Medicare</span>
        </p>
        <p className="mt-4 text-sm sm:text-lg md:text-xl">
          Looking for Ayurvedic Products in your own brand Name
        </p>

        {/* === Circular Image Section === */}
        <div className="flex justify-center items-center gap-4 mt-6 flex-wrap px-2 py-4">
          {[1, 2, 3, 4, 5].map((num) => (
            <div key={num} className="w-12 h-12 md:w-24 md:h-24 rounded-full overflow-hidden shadow-lg border-2 border-white">
              <img
                src={`assets/images/about/compliance${num}.png`}
                alt={`Product ${num}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* === Contact Button === */}
        <div className="mt-6">
          <Link legacyBehavior href="https://wa.me/1234567890">
            <a className="main-btn golden-btn px-4 py-3 sm:px-6 sm:py-3 text-sm sm:text-lg font-semibold rounded-md">Contact Us</a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CarausalTwo;
