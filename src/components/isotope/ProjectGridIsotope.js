import Isotope from "isotope-layout";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const ProjectGridIsotope = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".gallery-active", {
        itemSelector: ".item",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
    //     return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "active" : "");
  return (
    <section className="gallery-section pt-95 pb-70">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-8">
            {/*====== Section Title ======*/}
            <div className="section-title mb-40">
              <span className="sub-title">
                
                Photo Gallery
              </span>
              <h2>A Comprehensive Collection of Popular Photos from Our Company</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            {/*====== Filter Button ======*/}
            <ul className="project-filter mb-50">
              <li
                className={`c-pointer ${activeBtn("*")}`}
                onClick={handleFilterKeyChange("*")}
              >
                Show All
              </li>
              
              <li
                onClick={handleFilterKeyChange("cat-2")}
                className={activeBtn("cat-2")}
              >
                Products
              </li>
              
              <li
                onClick={handleFilterKeyChange("cat-4")}
                className={activeBtn("cat-4")}
              >
                manufacturing
              </li>
              
            </ul>
          </div>
        </div>
        <div className="row gallery-active">
          <div className="col-lg-4 col-md-6 col-sm-6 item cat-1 cat-4">
            {/*====== Gallery Item ======*/}
            <div className="single-project-item-three mb-30 wow fadeInDown">
              <div className="project-img">
                <img src="assets/images/gallery-sankar/gl-11.png" alt="Gallery Image" />
                
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 item cat-2">
            {/*====== Gallery Item ======*/}
            <div className="single-project-item-three mb-30 wow fadeInUp">
              <div className="project-img">
                <img src="assets/images/gallery-sankar/gl-2.png" alt="Gallery Image" />
                
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 item cat-3 cat-5">
            {/*====== Gallery Item ======*/}
            <div className="single-project-item-three mb-30 wow fadeInDown">
              <div className="project-img">
                <img
                  src="assets/images/gallery-sankar/gl-3.png"
                  alt="Gallery Image"
                />
                
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 item cat-4 cat-1">
            {/*====== Gallery Item ======*/}
            <div className="single-project-item-three mb-30 wow fadeInLeft">
              <div className="project-img">
                <img
                  src="assets/images/gallery-sankar/gl-4.png"
                  alt="Gallery Image"
                />
                
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 item cat-5 cat-2">
            {/*====== Gallery Item ======*/}
            <div className="single-project-item-three mb-30 wow fadeInDown">
              <div className="project-img">
                <img
                  src="assets/images/gallery-sankar/gl-14.png"
                  alt="Gallery Image"
                />
                
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 item cat-4 cat-3">
            {/*====== Gallery Item ======*/}
            <div className="single-project-item-three mb-30 wow fadeInRight">
              <div className="project-img">
                <img
                  src="assets/images/gallery-sankar/gl-6.png"
                  alt="Gallery Image"
                />
                
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 item cat-2 cat-3">
            {/*====== Gallery Item ======*/}
            <div className="single-project-item-three mb-30 wow fadeInUp">
              <div className="project-img">
                <img
                  src="assets/images/gallery-sankar/gl-7.png"
                  alt="Gallery Image"
                />
                
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 item cat-5">
            {/*====== Gallery Item ======*/}
            <div className="single-project-item-three mb-30 wow fadeInDown">
              <div className="project-img">
                <img
                  src="assets/images/gallery-sankar/gl-8.png"
                  alt="Gallery Image"
                />
                
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 item cat-1">
            {/*====== Gallery Item ======*/}
            <div className="single-project-item-three mb-30 wow fadeInUp">
              <div className="project-img">
                <img
                  src="assets/images/gallery-sankar/gl-9.png"
                  alt="Gallery Image"
                />
                
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 item cat-2">
            {/*====== Gallery Item ======*/}
            <div className="single-project-item-three mb-30 wow fadeInUp">
              <div className="project-img">
                <img
                  src="assets/images/gallery-sankar/gl-10.png"
                  alt="Gallery Image"
                />
                
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 item cat-2">
            {/*====== Gallery Item ======*/}
            <div className="single-project-item-three mb-30 wow fadeInUp">
              <div className="project-img">
                <img
                  src="assets/images/gallery-sankar/gl-11.png"
                  alt="Gallery Image"
                />
                
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 item cat-2">
            {/*====== Gallery Item ======*/}
            <div className="single-project-item-three mb-30 wow fadeInUp">
              <div className="project-img">
                <img
                  src="assets/images/gallery-sankar/gl-12.png"
                  alt="Gallery Image"
                />
                
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 item cat-4">
            {/*====== Gallery Item ======*/}
            <div className="single-project-item-three mb-30 wow fadeInUp">
              <div className="project-img">
                <img
                  src="assets/images/gallery-sankar/gl-13.png"
                  alt="Gallery Image"
                />
                
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 item cat-1">
            {/*====== Gallery Item ======*/}
            <div className="single-project-item-three mb-30 wow fadeInUp">
              <div className="project-img">
                <img
                  src="assets/images/gallery-sankar/gl22.png"
                  alt="Gallery Image"
                />
                
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 item cat-4">
            {/*====== Gallery Item ======*/}
            <div className="single-project-item-three mb-30 wow fadeInUp">
              <div className="project-img">
                <img
                  src="assets/images/gallery-sankar/gl23.png"
                  alt="Gallery Image"
                />
                
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 item cat-4">
            {/*====== Gallery Item ======*/}
            <div className="single-project-item-three mb-30 wow fadeInUp">
              <div className="project-img">
                <img
                  src="assets/images/gallery-sankar/gl24.png"
                  alt="Gallery Image"
                />
                
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 item cat-2">
            {/*====== Gallery Item ======*/}
            <div className="single-project-item-three mb-30 wow fadeInUp">
              <div className="project-img">
                <img
                  src="assets/images/gallery-sankar/gl25.png"
                  alt="Gallery Image"
                />
                
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 item cat-4">
            {/*====== Gallery Item ======*/}
            <div className="single-project-item-three mb-30 wow fadeInUp">
              <div className="project-img">
                <img
                  src="assets/images/gallery-sankar/gl26.png"
                  alt="Gallery Image"
                />
                
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 item cat-4">
            {/*====== Gallery Item ======*/}
            <div className="single-project-item-three mb-30 wow fadeInUp">
              <div className="project-img">
                <img
                  src="assets/images/gallery-sankar/gl27.png"
                  alt="Gallery Image"
                />
                
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 item cat-1">
            {/*====== Gallery Item ======*/}
            <div className="single-project-item-three mb-30 wow fadeInUp">
              <div className="project-img">
                <img
                  src="assets/images/gallery-sankar/gl-9.png"
                  alt="Gallery Image"
                />
                
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 item cat-4">
            {/*====== Gallery Item ======*/}
            <div className="single-project-item-three mb-30 wow fadeInUp">
              <div className="project-img">
                <img
                  src="assets/images/gallery-sankar/gl-7.png"
                  alt="Gallery Image"
                />
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProjectGridIsotope;
