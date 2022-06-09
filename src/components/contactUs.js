import React from "react";
import "../css/contact.css";
const ContactUs = () => {
  const mystye = {
    // width: "300px",
    // marginBottom:'',
    height: "400px",
    backgroundImage: `url('https://assets.website-files.com/6205f7ee3b8a768a85fce0fc/62078f27d0f5fd79a9a7e9e0_contact-banner-bg.jpg')`,
  };
  const icons = {
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    backgroundColor: "#eee",
  };
  const location = {
    backgroundImage: `url('https://images.unsplash.com/photo-1457530378978-8bac673b8062?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGZhcm18ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=1000')`,
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

      {/* sidebar section  */}
      <div
        className="container-fluid i-about mb-5"
        style={{ marginTop: "100px" }}
      >
        <div className="row align-content-center h-100">
          <div className="col-6 px-5 py-4">
            <div
              className="h-100 bg-img mx-3"
              style={{
                borderRadius: "20px",
                backgroundImage: `url('https://assets.website-files.com/6205f7ee3b8a768a85fce0fc/62078fba70cde4f5c6fee85a_contact-info-image.jpg')`,
              }}
            ></div>
          </div>
          <div className="col-6 h-100 about_text ps-sm-3">
            {/* <p className="">Only Pure and organic</p> */}
            <p></p>
            <p className="fw-bolder" style={{ fontSize: "50px" }}>
              Let's Find Out. Where Our Organic Farms Located.
            </p>
            <p className="mb-5">
              Please contact us using the information below. To locate, contact
              us in the nearest organic store or office closest to you, visit
              our office websites.
            </p>
            <div className="row">
              <div className="col-12 mb-5">
                <div className="row align-items-center">
                  <div className="col-2">
                    <img
                      src="https://assets.website-files.com/6205f7ee3b8a768a85fce0fc/620790a290706d5b6ba65573_contact-info-icon-1.svg"
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div className="col-8 abt-item text-capitalize">
                    <p className="m-0">Message</p>
                    <p>support@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="col-12 mb-5">
                <div className="row align-items-center">
                  <div className="col-2">
                    <img
                      src="https://assets.website-files.com/6205f7ee3b8a768a85fce0fc/620790a2398c457911d4fc75_contact-info-icon-2.svg"
                      alt=""
                    />
                  </div>
                  <div className="col-8 abt-item text-capitalize">
                    <p className="text-capitalize m-0">Contact Us</p>
                    <p>+01 123 456 789</p>
                  </div>
                </div>
              </div>
            </div>

            <a href="" className="btn ms-3 mt-5" style={icons}>
              <img
                style={{ width: "70%", marginTop: "15px" }}
                src="https://assets.website-files.com/6205f7ee3b8a768a85fce0fc/6206301779c1486c7d9eaee5_social-icon-2.svg"
                alt=""
              />
            </a>
            <a href="" className="btn ms-3 mt-5" style={icons}>
              <img
                style={{ width: "70%", marginTop: "15px" }}
                src="https://assets.website-files.com/6205f7ee3b8a768a85fce0fc/6206301803207161d16e9dcb_social-icon-3.svg"
                alt=""
              />
            </a>
            <a href="" className="btn ms-3 mt-5" style={icons}>
              <img
                style={{ width: "70%", marginTop: "15px" }}
                src="https://assets.website-files.com/6205f7ee3b8a768a85fce0fc/620630177246a742ac39be89_social-icon-1.svg"
                alt=""
              />
            </a>
            <a href="" className="btn ms-3 mt-5" style={icons}>
              <img
                style={{ width: "70%", marginTop: "15px" }}
                src="https://assets.website-files.com/6205f7ee3b8a768a85fce0fc/62063017ec5a152bdbc2e3d2_social-icon-4.svg"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>

      {/* location  */}
      <div className="root-h container-fluid bg-img" style={location}>
        <div className="row justify-content-end h-100 px-5 py-4">
          <div className="location h-100 col-5 p-5">
            <p className="l-head">Location</p>
            <p>Our Farms</p>
            <p className="mb-5">
              Organic product farms are located in main cities of the following
              places
            </p>
            <div className="row">
              <div className="col-2">
                <img
                  src="https://assets.website-files.com/6205f7ee3b8a768a85fce0fc/6207978367c464be0520371d_location-icon.svg"
                  alt=""
                />
              </div>
              <div className="col-9">
                <p>New York, USA:</p>
                <p>
                  299 Park Avenue New York, <br />
                  New York 10171, USA.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-2">
                <img
                  src="https://assets.website-files.com/6205f7ee3b8a768a85fce0fc/6207978367c464be0520371d_location-icon.svg"
                  alt=""
                />
              </div>
              <div className="col-9">
                <p>London, UK:</p>
                <p>
                  30 Stamford Street, Base Way, <br />
                  London 5478, UK.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* form  */}
      <form action="" className="mt-5 pt-5">
        <div className="container-fluid row msg-form">
          <div className="col-6 mb-5 px-4">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              name=""
              id="name"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="col-6 mb-5 px-4">
            <label htmlFor="email">Email Adresss</label>
            <input
              type="text"
              name=""
              id="email"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="col-6 mb-5 px-4">
            <label htmlFor="company">Company</label>
            <input
              type="text"
              name=""
              id="company"
              placeholder="Enter Company Name"
            />
          </div>
          <div className="col-6 mb-5 px-4">
            <label htmlFor="sub">Subject</label>
            <input
              type="text"
              name=""
              id="sub"
              placeholder="How Can We Help?"
            />
          </div>
          <div className="col-12 px-4">
            <label htmlFor="textarea">Message</label>
            <textarea
              className="w-100 py-4"
              placeholder="Your Message here..."
              name=""
              id="textarea"
            ></textarea>
          </div>
          <a
            href=""
            class="msg-btn fs-4 p-4 ms-1 mt-5 w-auto ms-4 mb-5 text-decoration-none"
          >
            Send Message<i class="fa-solid fa-circle-arrow-right mx-3"></i>
          </a>
        </div>
      </form>
    </main>
  );
};

export default ContactUs;
