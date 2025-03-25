import React from 'react'
import { GrGallery } from "react-icons/gr";
import { sliderProps } from "@/src/sliderProps";
import Slider from "react-slick";


const GallerySlider = () => {
  return (
    <section className="gallery-section mt-5">
      <div className="section-title mb-55 wow fadeInLeft">
                <span className="sub-title" style={{display: "flex", 
    alignItems: "center", 
    justifyContent: "center", 
}}>
                    <GrGallery />&nbsp;

                  Explore Our Gallery
                </span>
              </div>
        <div className="container-fluid">
          {/*====== Gallery Slider ======*/}
          <Slider
            {...sliderProps.projectsSliderTwo}
            className="projects-slider-two wow fadeInDown"
          >
            {/*====== Project Item ======*/}
            
            <div className="single-project-item-two">
              <div className="project-img">
                <img src="assets/images/gallery-sankar/gl27.png" alt="Gallery Image" />
                
              </div>
            </div>
            {/*====== Project Item ======*/}
            <div className="single-project-item-two">
              <div className="project-img">
                <img src="assets/images/gallery-sankar/gl-2.png" alt="Gallery Image" />
               
              </div>
            </div>
          
            {/*====== Project Item ======*/}
            <div className="single-project-item-two">
              <div className="project-img">
                <img src="assets/images/gallery-sankar/gl-3.png" alt="Gallery Image" />
                
              </div>
            </div>
            {/*====== Project Item ======*/}

            <div className="single-project-item-two">
              <div className="project-img">
                <img src="assets/images/gallery-sankar/gl-4.png" alt="Gallery Image" />
                
              </div>
            </div>
            {/*====== Project Item ======*/}

            <div className="single-project-item-two">
              <div className="project-img">
                <img src="assets/images/gallery-sankar/gl-5.png" alt="Gallery Image" />
                
              </div>
            </div>

             {/*====== Project Item ======*/}

             <div className="single-project-item-two">
              <div className="project-img">
                <img src="assets/images/gallery-sankar/gl-6.png" alt="Gallery Image" />
                
              </div>
            </div>

             {/*====== Project Item ======*/}

             <div className="single-project-item-two">
              <div className="project-img">
                <img src="assets/images/gallery-sankar/gl-14.png" alt="Gallery Image" />
               
              </div>
            </div>

             {/*====== Project Item ======*/}

             <div className="single-project-item-two">
              <div className="project-img">
                <img src="assets/images/gallery-sankar/gl-8.png" alt="Gallery Image" />
                
              </div>
            </div>

             {/*====== Project Item ======*/}

             <div className="single-project-item-two">
              <div className="project-img">
                <img src="assets/images/gallery-sankar/gl-9.png" alt="Gallery Image" />
                
              </div>
            </div>

             {/*====== Project Item ======*/}

             <div className="single-project-item-two">
              <div className="project-img">
                <img src="assets/images/gallery-sankar/gl22.png" alt="Gallery Image" />
                
              </div>
            </div>
             <div className="single-project-item-two">
              <div className="project-img">
                <img src="assets/images/gallery-sankar/gl26.png" alt="Gallery Image" />
                
              </div>
            </div>
             <div className="single-project-item-two">
              <div className="project-img">
                <img src="assets/images/gallery-sankar/gl23.png" alt="Gallery Image" />
                
              </div>
            </div>
             <div className="single-project-item-two">
              <div className="project-img">
                <img src="assets/images/gallery-sankar/gl24.png" alt="Gallery Image" />
                
              </div>
            </div>
             <div className="single-project-item-two">
              <div className="project-img">
                <img src="assets/images/gallery-sankar/gl25.png" alt="Gallery Image" />
                
              </div>
            </div>

          </Slider>
        </div>
      </section>
  )
}

export default GallerySlider