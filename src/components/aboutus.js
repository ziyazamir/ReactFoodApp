import React from "react";
import img1 from "../images/img1.jpg";
import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";
import "../css/aboutus.css";
const AboutUs = () => {
  const mystye = {
    // width: "300px",
    // marginBottom:'',
    height: "400px",
    backgroundImage: `url('https://assets.website-files.com/6205f7ee3b8a768a85fce0fc/620744796f82d33fff3125eb_about-banner-bg.jpg')`,
  };
  const imgstyle = {
    width: "20ppx",
    height: "auro",
  };
  return (
    <main>
      <div className="container-fluid row m-0 bg-img mb-5" style={mystye}>
        <p
          style={{ fontSize: "45px", fontFamily: "cursive" }}
          className="d-block m-auto text-center fw-bold"
        >
          About Us
        </p>
      </div>
      <div
        className="container-fluid i-about mb-5"
        style={{ marginTop: "100px" }}
      >
        <div className="row align-content-center h-100">
          <div
            className="col-6 h-100 bg-img"
            style={{
              backgroundSize: "contain",
              backgroundImage: `url('https://assets.website-files.com/6205f7ee3b8a768a85fce0fc/62074eeab2b631d03dd8117c_about-image.png')`,
            }}
          ></div>
          <div className="col-6 h-100 about_text ps-sm-5">
            <p className="">Only Pure and organic</p>
            <p className="fw-bolder" style={{ fontSize: "50px" }}>
              Fresh From Farm <br />
              Return To Purity
            </p>
            <p>
              Our rich experience helps us in ensuring that the products brought
              to you are 100% chemical-free. To live a better, healthier, and
              wholesome life by providing them with 100% certified, authentic
              organic food.
              <br />
              <br />
              Welcome to the world of nature and organic. Here you can discover
              the bounty of nature. We have grown on the principles of health
              and care. We aim to give our customers a healthy chemical-free
              meal for perfect nutrition.
            </p>
            <div className="row">
              <div className="col-6">
                <div className="row align-items-center">
                  <div className="col-4">
                    <i
                      class="fa-solid fa-tractor"
                      style={{ fontSize: "70px", color: "greenyellow" }}
                    ></i>
                  </div>
                  <div className="col-8 abt-item text-capitalize">
                    <p>Modern Agriculture Equipment</p>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="row align-items-center">
                  <div className="col-4">
                    <i
                      class="fa-solid fa-flask-vial"
                      style={{ fontSize: "70px", color: "greenyellow" }}
                    ></i>
                  </div>
                  <div className="col-8 abt-item text-capitalize">
                    <p className="text-capitalize">
                      No Chemicals & Hormones Are Used
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <a href="" className="btn fs-4 p-3 ms-1 mt-5">
              Explore<i class="fa-solid fa-circle-arrow-right fs-5 mx-3"></i>
            </a>
          </div>
        </div>
      </div>

      {/* cards */}
      <div
        className="container-fluid p-5 mb-5"
        style={{
          backgroundImage: `url('https://assets.website-files.com/6205f7ee3b8a768a85fce0fc/62073d6fa7b1d87fc0c318e2_subscribe-background.jpg')`,
        }}
      >
        <div className="row">
          <div className="col-3">
            <div className="card text-center shadow-sm px-4 py-5">
              <img
                className="d-block m-auto"
                style={imgstyle}
                src="https://assets.website-files.com/6205f7ee3b8a768a85fce0fc/620758086038b20c19160ceb_choose-icon-1.svg"
                alt=""
              />
              <p className="fw-bold fs-3">Return policy</p>
              <p className="fs-5 text-success fw-normal">
                If the product having any issues you can return the product
              </p>
            </div>
          </div>
          <div className="col-3">
            <div className="card text-center shadow-sm px-4 py-5">
              <img
                className="d-block m-auto"
                style={imgstyle}
                src="https://assets.website-files.com/6205f7ee3b8a768a85fce0fc/62075808693940d2a9b3c1e9_choose-icon-2.svg"
                alt=""
              />
              <p className="fw-bold fs-3">100% Fresh</p>
              <p className="fs-5 text-success fw-normal">
                Organic and fresh products are delivered at door step.
              </p>
            </div>
          </div>
          <div className="col-3">
            <div className="card text-center shadow-sm px-4 py-5">
              <img
                className="d-block m-auto"
                style={imgstyle}
                src="https://assets.website-files.com/6205f7ee3b8a768a85fce0fc/6207580890706d221ca54032_choose-icon-3.svg"
                alt=""
              />
              <p className="fw-bold fs-3">Support 24/7</p>
              <p className="fs-5 text-success fw-normal">
                Our support team is available for take care the customers.
              </p>
            </div>
          </div>
          <div className="col-3">
            <div className="card text-center shadow-sm px-4 py-5">
              <img
                className="d-block m-auto"
                style={imgstyle}
                src="https://assets.website-files.com/6205f7ee3b8a768a85fce0fc/62075808abdb2e2950702021_choose-icon-4.svg"
                alt=""
              />
              <p className="fw-bold fs-3">Secured Payment</p>
              <p className="fs-5 text-success fw-normal">
                Fully secured payment methods are used for buying product.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* offer */}
      <div className="offer container-fluid root-h mt-5 p-5">
        <p className="text-capitalize fw-bold text-center">the products</p>
        <p>we offer organic for you</p>
        <div className="row">
          <div className="col-3">
            <img
              className="img-fluid shadow-sm"
              src="https://assets.website-files.com/6205f7ee3b8a768a85fce0fc/620768e84f9d7f49ade9010c_offer-image-1.jpg"
              alt=""
            />
            <p className="fs-2 mt-3">Spice</p>
          </div>
          <div className="col-3">
            <img
              className="img-fluid shadow-sm"
              src="https://assets.website-files.com/6205f7ee3b8a768a85fce0fc/620768e88a88bf0e16446ae2_offer-image-2.jpg"
              alt=""
            />
            <p className="fs-2 mt-3">Nuts & Feeds</p>
          </div>
          <div className="col-3">
            <img
              className="img-fluid shadow-sm"
              src="https://assets.website-files.com/6205f7ee3b8a768a85fce0fc/620768e893badb85c2e0e0f0_offer-image-3.jpg"
              alt=""
            />
            <p className="fs-2 mt-3">Fruits</p>
          </div>
          <div className="col-3">
            <img
              className="img-fluid shadow-sm"
              src="https://assets.website-files.com/6205f7ee3b8a768a85fce0fc/620768e8399e643145fca1c5_offer-image-4.jpg"
              alt=""
            />
            <p className="fs-2 mt-3">Vegetables</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutUs;
