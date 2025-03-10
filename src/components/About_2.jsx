import React from 'react'
import Link from "next/link";


const AnotherAbout = () => {
  return (
    <section className="features-seciton pb-50 mt-5">
    <div className="container">
      <div className="row align-items-xl-end">
        <div className="col-lg-6">
          {/*====== Features Image Box ======*/}
          <div className="features-image-box mb-50 wow fadeInLeft">
            <img
              src="assets/images/features/home-1.png"
              alt="Features Image"
              className="h-2xl"
            />
          </div>
        </div>
        <div className="col-lg-6">
          {/*====== Features Content Box ======*/}
          <div className="features-content-box mb-50 wow fadeInRight">
            <div className="section-title mb-20">
              <h3> Ready to Start Your Own Business.</h3>
            </div>
            <p className="mb-35">
            Choose Sankar Ayush & be your own boss by taking the PCD
            franchise & third party manufacturing from the company.
            </p>
            <ul className="features-list">
              <li>
                <i className="fal fa-long-arrow-right" />
                Quality Assurance
              </li>
              <li>
                <i className="fal fa-long-arrow-right" />
                Dedicated Team Members
              </li>
              <li>
                <i className="fal fa-long-arrow-right" />
                Comprehensive Support
              </li>
            </ul>
            <Link legacyBehavior href="/about">
              <a className="main-btn primary-btn">Learn More Us</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default AnotherAbout;