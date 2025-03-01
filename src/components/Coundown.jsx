import React from 'react'
import Counter from "./Counter";

const Coundown = () => {
  return (
    <section className="features-section-two p-r z-1">
        {/*=== Features Wrapper ===*/}
        <div className="features-wrapper-two main-bg wow fadeInDown">
          <div className="shape shape-one">
            <span>
              <img src="assets/images/shape/leaf-5.png" alt="Leaf" />
            </span>
          </div>
          <div className="shape shape-two">
            <span>
              <img src="assets/images/shape/leaf-5.png" alt="Leaf" />
            </span>
          </div>
          <div className="shape shape-three">
            <span>
              <img src="assets/images/shape/leaf-5.png" alt="Leaf" />
            </span>
          </div>

          {/*=== Counter Area ===*/}
          <div className="">
            <div className="row ">

              <div className="col-lg-6 col-sm-6">
                {/*=== Counter Item ===*/}
                <div className="single-counter-item-two mb-30 wow fadeInUp">
                  <div className="inner-counter">
                    <div className="icon">
                      
                    </div>
                    <h2 className="number">
                      <Counter end={99} />%
                    </h2>
                    <p>Satisfactions Rate</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                {/*=== Counter Item ===*/}
                <div className="single-counter-item-two mb-30 wow fadeInDown">
                  <div className="inner-counter">
                    <div className="icon">
                      
                    </div>
                    <h2 className="number">
                      <Counter end={200} />+
                    </h2>
                    <p>Expert Team Member</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
  )
}

export default Coundown