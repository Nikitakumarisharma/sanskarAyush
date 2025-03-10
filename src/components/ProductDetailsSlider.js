import { useEffect, useState } from "react";
import Slider from "react-slick";

const ProductDetailsSlider = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);
  useEffect(() => {
    setNav1(slider1);
  });
  const slider = {
    arrows: false,
    dots: false,
    infinite: false,
    autoplay: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="product-gallery-area mb-50 wow fadeInLeft">
      <Slider
        {...slider}
        asNavFor={nav2}
        ref={(slider) => setSlider1(slider)}
        className="product-big-slider "
      >
        <div className="product-img">
          
            <img src="assets/images/gallery-sankar/gl-2.png" alt="Product" />
        </div>
        <div className="product-img">
          
            <img src="assets/images/gallery-sankar/gl-4.png" alt="Product" />
        </div>
        <div className="product-img">
         
            <img src="assets/images/gallery-sankar/gl-6.png" alt="Product" />
        </div>
      </Slider>
    </div>
  );
};
export default ProductDetailsSlider;
