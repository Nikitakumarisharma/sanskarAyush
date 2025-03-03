import React from "react";
import Link from "next/link";

const Carausal = () => {
  return (
    <section className="banner-section">
      {/*=== Hero Wrapper ===*/}
      <div className="hero-wrapper-one">
        {/* Background Video */}
        <div className="video-container">
          <video autoPlay loop muted playsInline className="hero-bg-video">
            <source src="/assets/videos/ayush.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Black Overlay */}
          <div className="video-overlay"></div>
        </div>

        <div className="container">
          <div className="row align-items-lg-center">
            <div className="col-xl-7 col-lg-12">
              {/*=== Hero Content ===*/}
              <div className="hero-co">
                <h1
                  className="wow fadeInUp text-shadow-custom responsive-text"
                  data-wow-delay="6s"
                >
                  Welcome to{" "}
                  <span className="text-green-900">Sanskar Ayush Medicare</span>
                </h1>
                <p
                  className="wow fadeInDown text-green-900 mt-4 lg:text-2xl"
                  data-wow-delay="6s"
                >
                  Looking for Ayurvedic Products in your own brand Name
                </p>
                <div
                  className="hero-button mb-30 wow fadeInUp mt-4 "
                  data-wow-delay="6s"
                >
                  <Link legacyBehavior href="https://wa.me/9193078685">
                    <a className="main-btn golden-btn mb-10 mr-3">Contact Us</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              {/*=== Hero Image Box ===*/}
            </div>
          </div>
        </div>

        <style jsx>{`
          .hero-wrapper-one {
            position: relative;
            overflow: hidden;
          }

          .video-container {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
          }

          .hero-bg-video {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .video-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: white;
            opacity: 0.4; /* Adjust opacity as needed */
          }
          .text-shadow-custom {
            text-shadow: 3px 3px 6px rgba(255, 255, 255, 0.6); /* White shadow */
          }
          .responsive-text {
            font-size: 50px; /* Default size */
          }

          @media (max-width: 768px) {
            .responsive-text {
              font-size: 30px; /* Smaller font size on mobile */
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default Carausal;
