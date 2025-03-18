import React from 'react'
import Counter from "./Counter";

const Countdown = () => {
  return (
    <section className="main-bg wow fadeInDown">
      {/*=== Counter Area ===*/}
      <div className="container"> {/* Added container for proper alignment */}
        <div className="row py-5 g-0"> {/* Removed unwanted gutter spacing */}

          {/* Left Side */}
          <div className="col-lg-5 col-sm-6 mx-auto px-0"> {/* Removed extra padding */}
            <div className="single-counter-item-two wow fadeInUp text-center">
              <div className="inner-counter">
                <h2 className="number">
                  <Counter end={99} />%
                </h2>
                <p>Satisfaction Rate</p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="col-lg-6 col-sm-6 mx-auto px-0"> {/* Removed extra padding */}
            <div className="single-counter-item-two wow fadeInDown text-center">
              <div className="inner-counter">
                <h2 className="number">
                  <Counter end={200} />+
                </h2>
                <p>Expert Team Members</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Countdown;
