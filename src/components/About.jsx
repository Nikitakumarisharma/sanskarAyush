import React from 'react'
import Counter from "./Counter";
import { FaCircleInfo } from "react-icons/fa6";
import Link from "next/link";


const About = () => {
  return (
    <section className="about-section pt-100 pb-50">
        <div className="container">
          <div className="row align-items-xl-center">
            <div className="col-xl-6">
              {/*====== About Image Box  ======*/}
              <div className="about-one_image-box mb-50 p-r z-1 wow fadeInLeft">
                <div className="shape shape-one">
                  <span />
                </div>
                <img
                  src="assets/images/gallery-sankar/gl-5.png"
                  className="about-img-one h-52 w-60"
                  alt="About Image"
                />
                <img
                  src="assets/images/gallery-sankar/gl-1.png"
                  className="about-img-two h-96 w-96"
                  alt="About Image"
                />
                <img
                  src="assets/images/about/ayurveda.png"
                  className="about-img-three"
                  alt="About Image"
                />
                <div className="experience-item">
                  <h2 className="number">
                    <Counter end={14} />+
                  </h2>
                  <h4>Years Of Experience</h4>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              {/*====== About Content Box  ======*/}
              <div className="about-content-box pl-lg-60 mb-50 wow fadeInRight">
                <div className="section-title mb-30">
                  <span className="sub-title">
                    
                  </span>
                  <h3> <span className="gap-2"> <FaCircleInfo />
                  </span> About Sanskar Ayush Medicare </h3>
                </div>
                <p className="mb-30">
                
                Sanskar Ayush Medicare Pvt. Ltd. is a leading third-party manufacturer specializing in Ayurvedic medicines and herbal cosmetics. Established in 2010, we are committed to producing high-quality products that blend Ayurveda with modern innovation. With GMP-certified manufacturing facilities and strict quality control, we ensure every product meets the highest standards of purity, safety, and efficacy. Collaborating with top brands, we bring their formulations to life with precision and excellence.  

Our focus on innovation and customization sets us apart. We work closely with clients to develop formulations that meet their needs, leveraging expertise in Ayurvedic principles and advanced techniques. Customer satisfaction is our priority, and we strive to deliver timely, high-quality, reliable products. As a trusted name, Sanskar Ayush Medicare Pvt. Ltd.
                </p>
                <ul className="check-style-one mb-35">
                  <li>
                    <i className="far fa-check" />
                    Quality Assurance
                  </li>
                  <li>
                    <i className="far fa-check" />
                    Customer Satisfaction
                  </li>
                </ul>
                <Link legacyBehavior href="/about">
                  <a className="main-btn primary-btn">Learn More</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default About