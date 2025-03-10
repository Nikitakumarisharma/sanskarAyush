import React from 'react'
import Counter from "./Counter";

const Coundown = () => {
  return (
    <section className="main-bg wow fadeInDown">

          {/*=== Counter Area ===*/}
            <div className="row py-5 ">

              <div className="col-lg-5 col-sm-6">
                {/*=== Counter Item ===*/}
                <div className="single-counter-item-two wow fadeInUp">
                  <div className="inner-counter">
                    
                    <h2 className="number">
                      <Counter end={99} />%
                    </h2>
                    <p>Satisfactions Rate</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-6">
                
                <div className="single-counter-item-two  wow fadeInDown">
                  <div className="inner-counter">
                    
                    <h2 className="number">
                      <Counter end={200} />+
                    </h2>
                    <p>Expert Team Member</p>
                  </div>
                </div>
              </div>

          </div>
      </section>
  )
}

export default Coundown