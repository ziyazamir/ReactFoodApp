// import React, { useState } from 'react'
import "../css/common.css";
import "../css/testimonials.css";
import bg from "../images/testimonial-bg.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import TestimonialSlider from './testimonial_slider';
import data from "../api/testimonial_data";
const testimonial = () => {
  // const [Sliderdata, setSliddata] = useState(data);
  console.log(typeof data);
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    Arrow:true,
  };
  return (
    <div
      className="root-h bg-image testimonials"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="pt-2">
        <p className="t-head text-center pt-3 mt-5 fs-1">Testimonials</p>
        <p className="text-capitalize fs-2 text-center">
          what Our customers say
        </p>
      </div>
      <div>

        <Slider {...settings}>
          {/* <TestimonialSlider dataa = {data} /> */}

          <div className="s-item p-5">
            <div className="">
              <img
                className="d-bock m-auto"
                src="https://images.unsplash.com/photo-1530577197743-7adf14294584?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHNpbmdsZSUyMHBlcnNvbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500"
                alt=""
                srcset=""
              />
            </div>
            <div className="t-desc text-center">
              <p className="t-name">Sara Khan</p>
              <p className="d-block m-auto t-msg w-50">
                The quality of organic produce is extremely high, the service is
                second to none and the taste of the food takes me back to my
                childhood when we were growing our own.
              </p>
            </div>
          </div>
          <div className="s-item p-5">
            <div>
              <img
                className="d-bock m-auto"
                src="https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=594"
                alt=""
                srcset=""
              />
            </div>
            <div className="t-desc text-center">
              <p className="t-name">Laurence Macoyl</p>
              <p className="d-block m-auto t-msg w-50">
                I have been using the Organick Grocer for over a year now and I
                find the staff friendly and helpful with a good knowledge of the
                products they sell.
              </p>
            </div>
          </div>
          <div className="s-item p-5">
            <div>
              <img
                className="d-bock m-auto"
                src="https://images.unsplash.com/photo-1520451644838-906a72aa7c86?ixlib=rb-1.2.1&raw_url=true&q=60&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fHNpbmdsZSUyMHBlcnNvbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500"
                alt=""
                srcset=""
              />
            </div>
            <div className="t-desc text-center">
              <p className="t-name">Burack</p>
              <p className="d-block m-auto t-msg w-50">
                The quality of organic produce is extremely high, the service is
                second to none and the taste of the food takes me back to my
                childhood when we were growing our own.
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default testimonial;
