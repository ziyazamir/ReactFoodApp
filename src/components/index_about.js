import React from "react";
import css from "../css/index.css";
import img1 from "../images/img1.jpg";
import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";

const index_about = () => {
  return (
    <div className="container-fluid i-about mb-5">
      <div className="row align-content-center h-100">
        <div
          className="col-md-6 col-12 h-100 bgImg d-md-block d-none"
          style={{ backgroundImage: `url(${img1})` }}
        ></div>
        <div className="col-md-6 col-12 h-100 about_text">
          <p className="">About Us</p>
          <p className="fw-bolder">
            We Believe In Organic Foods For Strong Health
          </p>
          <p>
            Welcome to the world of natural and organic. Here you can discover
            the bounty of nature. We have grown on the principles of health, and
            care. We aim to give our customers a healthy chemical-free meal for
            perfect nutrition.
          </p>
          <div className="row">
            <div className="col-4">
              <img
                className="d-block m-auto"
                width={`135px`}
                src={icon1}
                alt="icon1"
              />
            </div>
            <div className="col-8 abt-item text-capitalize">
              <p>Organic foods only</p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
                ullam molestiae, soluta aliquam ipsam sapiente quasi,
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <img
                className="d-block m-auto"
                width={`100px`}
                src={icon2}
                alt="icon1"
              />
            </div>
            <div className="col-8 abt-item text-capitalize">
              <p className="text-capitalize">quality standards</p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
                ullam molestiae, soluta aliquam ipsam sapiente quasi,
              </p>
            </div>
          </div>
          <a href="" className="btn fs-4 p-3 ms-1 mt-5">
            Shop Now<i class="fa-solid fa-circle-arrow-right fs-5 ms-2"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default index_about;
