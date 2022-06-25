import React from "react";
import cr from "../css/crausel.css";
import c1 from "../images/c1.jpg";
import c2 from "../images/c2.jpg";
const crausel = () => {
  return (
    <div className="container-fluid w-100 carausel">
      <div className="row h-100 align-content-center">
        <div className="col-md-6 col-12 px-5">
          <div
            style={{ backgroundImage: `url(${c1})` }}
            className="carausel-item border"
          >
            <div className="ps-md-5 ps-0 pt-3 cr-text text-md-start text-center mt-md-0 mt-5">
              <p style={{ color: `white` }}>Fresh & Crispy</p>
              <p style={{ color: `black` }}>Get Hot Baked crunches</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-12 px-5 my-md-0 my-4">
          <div
            style={{ backgroundImage: `url(${c2})` }}
            className="carausel-item border"
          >
            <div className="ps-md-5 ps-0 pt-3 cr-text text-md-start text-center align-self-center mt-md-0 mt-5">
              <p>Natural 100%</p>
              <p>Get Garden Fresh Fruits</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default crausel;
