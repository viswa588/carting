import React from 'react';
import Slider from 'react-slick';
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

const ProductSlider = (props) => {
  console.log(props, '345678')
  const {images} = props
  console.log(images, '345678')
  const settings = {
    customPaging: function(i) {
      return (
        <a>
          <img src={`${images[i]}`} className='w-100'/>
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
    return(
        <div>
            <Slider {...settings}>
          {images?.map((data, index) => {
            return <div key={index}><img src={data} className='w-100'/></div>
            
          })}
        </Slider>
        </div>
    )
}
export default ProductSlider