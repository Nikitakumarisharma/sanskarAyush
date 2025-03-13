import React from "react";
import { FaBottleDroplet } from "react-icons/fa6";
import { TbBowlSpoonFilled } from "react-icons/tb";
import { FaEyeDropper,FaCapsules  } from "react-icons/fa";
import { GiFruitBowl } from "react-icons/gi";
import { MdFace3 } from "react-icons/md";

import { ImTree } from "react-icons/im";
import Link from "next/link";

const service = () => {
  return (
    <section className="features-section mt-85 font-poppins">
      <div className="container">
      
        <div className="text-center mb-5 ">
          <h3><span><ImTree /> </span>&nbsp; services We Provide</h3>
          <p className="text-[#7EA63F] text-2xl">Get Ayurvedic third-party manufacturing with your Brand Name</p>
        </div>
        
        <div className="row">
          <div className="col-xl-4 col-md-6 col-sm-12">
            <div
              className="features-thumb-item-two mb-40 wow fadeInDown"
              data-wow-delay=".2s"
            >
              <div className="thumb">
                <img
                  src="assets/images/home-service/sv-1.jpg"
                  alt="Image"
                  className="h-80 "
                />
              </div>
              <div className="text">
                <div className="icon">
                  <i>
                    <FaBottleDroplet />
                  </i>
                </div>

                <h5 className="title">Liquid Orals</h5>
                <p>Liquid formulations for faster absorption.</p>

                <div className="row gap-3 pl-3">
                  <p className="bg-[#7EA63F] text-white px-2 rounded-sm ">
                    Syrups
                  </p>
                  <p className="bg-[#7EA63F] text-white px-2 rounded-sm ">
                    Suspensions
                  </p>
                  <p className="bg-[#7EA63F] text-white px-2 rounded-sm ">
                    Drops
                  </p>
                  <p className="bg-[#7EA63F] text-white px-2 rounded-sm ">
                    Medicated{" "}
                  </p>
                  <p className="bg-[#7EA63F] text-white px-2 rounded-sm ">
                    Candies
                  </p>
                </div>
                <p className="text-green-700 text-right hover:font-bold mt-70">
                  <Link href="/service-details" prefetch>
                    Read More..
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-sm-12">
            <div
              className="features-thumb-item-two mb-40 wow fadeInUp"
              data-wow-delay=".25s"
            >
              <div className="thumb">
                <img
                  src="assets/images/home-service/sv-2.jpg"
                  alt="Image"
                  className="h-80"
                />
              </div>
              <div className="text">
                <div className="icon">
                <i>
                <MdFace3 />

                  </i>

                </div>
                <h5 className="title">Cosmetic Topicals </h5>
                <p>External applications for skincare and hygiene.</p>
                <div className="row gap-3 pl-3">
                  <p className="bg-[#7EA63F] text-white px-2 rounded-sm ">
                    Creams
                  </p>
                  <p className="bg-[#7EA63F] text-white px-2 rounded-sm ">
                    Ointments
                  </p>
                  <p className="bg-[#7EA63F] text-white px-2 rounded-sm ">
                    Gels
                  </p>
                  <p className="bg-[#7EA63F] text-white px-2 rounded-sm ">
                    Balm
                  </p>
                  <p className="bg-[#7EA63F] text-white px-2 rounded-sm ">
                    Paste
                  </p>
                  <p className="bg-[#7EA63F] text-white px-2 rounded-sm ">
                    Shampoo
                  </p>
                  <p className="bg-[#7EA63F] text-white px-2 rounded-sm ">
                    Conditioner
                  </p>
                  <p className="bg-[#7EA63F] text-white px-2 rounded-sm ">
                    Lotion
                  </p>
                </div>
                <p className="text-green-700 text-right hover:font-bold mt-0">
                  <Link href="/service2" prefetch>
                    Read More..
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-sm-12">
            <div
              className="features-thumb-item-two mb-40 wow fadeInDown"
              data-wow-delay=".3s"
            >
              <div className="thumb">
                <img
                  src="assets/images/home-service/sv-3.jpg"
                  alt="Image"
                  className="h-80"
                />
              </div>
              <div className="text">
                <div className="icon">
                <i>
                <TbBowlSpoonFilled />

                  </i>
                </div>
                <h5 className="title">Paste</h5>
                <p>
                  Ayurvedic immunity booster for health, energy, and wellness.
                </p>
                <div className="row gap-3 pl-3">
                  <p className="bg-[#7EA63F] text-white px-2 rounded-sm ">
                    Avaleha
                  </p>
                  <p className="bg-[#7EA63F] text-white px-2 rounded-sm ">
                    Chyawanprash
                  </p>
                  <p className="bg-[#7EA63F] text-white px-2 rounded-sm ">
                    Therapeutic resins.
                  </p>
                </div>
                <p className="text-green-700 text-right hover:font-bold mt-40">
                  <Link href="/service3" prefetch>
                    Read More..
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-sm-12">
            <div
              className="features-thumb-item-two mb-40 wow fadeInUp"
              data-wow-delay=".35s"
            >
              <div className="thumb">
                <img
                  src="assets/images/home-service/sv-4.jpg"
                  alt="Image"
                  className="h-80"
                />
              </div>
              <div className="text">
                <div className="icon">
                <i>
                <FaEyeDropper />

                  </i>
                </div>
                <h5 className="title">Drops</h5>
                <p>Specialized drops for targeted relief.</p>
                <div className="row gap-3 pl-3">
                  <p className="bg-[#7EA63F] text-white px-2 rounded-sm ">
                    Herbal
                  </p>
                  <p className="bg-[#7EA63F] text-white px-2 rounded-sm ">
                    Nasal
                  </p>
                  <p className="bg-[#7EA63F] text-white px-2 rounded-sm ">
                    Ear
                  </p>
                  <p className="bg-[#7EA63F] text-white px-2 rounded-sm ">
                    Eye{" "}
                  </p>
                </div>
                <p className="text-green-700 text-right hover:font-bold mt-80">
                  <Link href="/service4" prefetch>
                    Read More..
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-sm-12">
            <div
              className="features-thumb-item-two mb-40 wow fadeInUp"
              data-wow-delay=".35s"
            >
              <div className="thumb">
                <img
                  src="assets/images/home-service/sv-5.jpg"
                  alt="Image"
                  className="h-80"
                />
              </div>
              <div className="text">
                <div className=" icon ">
                <i>
                <FaCapsules />


                  </i>
                </div>
                <h5 className="title">Solid Orals</h5>
                <p>Effective oral formulations for daily health.</p>
                <div className="row gap-3 pl-3">
                  <p className="bg-[#7EA63F] text-white px-2 rounded-sm ">
                    Tablets
                  </p>
                  <p className="bg-[#7EA63F] text-white px-2 rounded-sm ">
                    Capsules
                  </p>
                  <p className="bg-[#7EA63F] text-white px-2 rounded-sm ">
                    Granules
                  </p>
                  <p className="bg-[#7EA63F] text-white px-2 rounded-sm ">
                    Powders
                  </p>
                  <p className="bg-[#7EA63F] text-white px-2 rounded-sm ">
                    Candies
                  </p>
                </div>
                <p className="text-green-700 text-right hover:font-bold mt-40">
                  <Link href="/service5" prefetch>
                    Read More..
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-sm-12">
            <div
              className="features-thumb-item-two mb-40 wow fadeInUp"
              data-wow-delay=".35s"
            >
              <div className="thumb">
                <img
                  src="assets/images/home-service/sv-6.jpg"
                  alt="Image"
                  className="h-80"
                />
              </div>
              <div className="text">
                <div className="icon">
                <i>
                <GiFruitBowl />

                  </i>
                </div>
                <h5 className="title">Juices/Ras</h5>
                <p>Herbal and medicated health beverages.</p>
                <div className="row gap-3 pl-3">
                  <p className="bg-[#7EA63F] text-white px-2 rounded-sm ">
                    Adrak
                  </p>
                  <p className="bg-[#7EA63F] text-white px-2 rounded-sm ">
                    Amla
                  </p>
                  <p className="bg-[#7EA63F] text-white px-2 rounded-sm ">
                    Aloe Vera
                  </p>
                  <p className="bg-[#7EA63F] text-white px-2 rounded-sm ">
                    Karela
                  </p>
                  <p className="bg-[#7EA63F] text-white px-2 rounded-sm ">
                    Triphala
                  </p>
                  <p className="bg-[#7EA63F] text-white px-2 rounded-sm ">
                    Neem
                  </p>
                  <p className="bg-[#7EA63F] text-white px-2 rounded-sm ">
                    Giloy
                  </p>
                  <p className="bg-[#7EA63F] text-white px-2 rounded-sm ">
                    Jamun
                  </p>
                  <p className="bg-[#7EA63F] text-white px-2 rounded-sm ">
                    Flexible Customization
                  </p>
                </div>
                <p className="text-green-700 text-right hover:font-bold mt-0">
                  <Link href="/service6" prefetch>
                    Read More..
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default service;
