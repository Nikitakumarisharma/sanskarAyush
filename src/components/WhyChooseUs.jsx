import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { FaArrowUpShortWide } from "react-icons/fa6";
import { FaCoins } from "react-icons/fa";
import { BsBuildingFillGear } from "react-icons/bs";




const WhyChooseUs = () => {
  return (
    <section className="working-process-section pt-100 pb-100">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-9 col-lg-12">
          <div className="section-title text-center mb-60 wow fadeInDown">
            <h3>
           
              Why Choose Us
            </h3>
            
          </div>
        </div>
      </div>
      <div className="working-process-wrapper wow fadeInUp">
        <div className="row no-lg-gutters">
          {/*====== Working Process Wrapper ======*/}
          <div className="col-lg-3 col-md-6">
            {/*====== Single Process Item ======*/}
            <div className="single-process-item">
              <div className="inner-process-item">
                <div className="icon">
                  <i>

                <FaArrowUpShortWide />
                  </i>

                </div>
                <div className="text">
                  <h4 className="title">High-Quality Standards</h4>
                  <p>We ensure top-notch quality with advanced technology and stringent quality control measures.

</p>
                  <img src="assets/images/line.png" alt="Line" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            {/*====== Single Process Item ======*/}
            <div className="single-process-item">
              <div className="inner-process-item">
               
                <div className="icon">
                <i><TbTruckDelivery />
                </i>
                </div>
                <div className="text">
                  <h4 className="title">Timely Delivery Services</h4>
                  <p>Reliable and efficient processes guarantee on-time delivery of your products.

</p>
                  <img src="assets/images/line.png" alt="Line" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            {/*====== Single Process Item ======*/}
            <div className="single-process-item">
              <div className="inner-process-item">
                
                <div className="icon">
                <i><BsBuildingFillGear />
                </i>
                </div>
                <div className="text">
                  <h4 className="title">Customizable Manufacturing</h4>
                  <p>Tailored solutions to meet your unique product specifications and quantities.

</p>
                  <img src="assets/images/line.png" alt="Line" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            {/*====== Single Process Item ======*/}
            <div className="single-process-item">
              <div className="inner-process-item">
                
                <div className="icon">
                <i>
                <FaCoins />

                </i>
                </div>
                <div className="text">
                  <h4 className="title">
                  Cost-Effective Solutions
                  </h4>
                  <p>Competitive pricing without compromising on quality, offering great value for your investment.

</p>
                  <img src="assets/images/line.png" alt="Line" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default WhyChooseUs