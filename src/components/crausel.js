import React from "react";
import cr from "../css/crausel.css";
import c1 from "../images/c1.jpg";
import c2 from "../images/c2.jpg";
const crausel = () => {
  return (
    <div className="container-fluid w-100 carausel">
      <div className="row h-100 align-content-center">
        <div className="col-6 px-5">
          <div
            style={{ backgroundImage: `url(${c1})` }}
            className="carausel-item border"
          >
            <div className="ps-5 pt-3 cr-text">
              <p style={{ color: `white` }}>Fresh & Crispy</p>
              <p style={{ color: `black` }}>Get Hot Baked crunches</p>
            </div>
          </div>
        </div>
        <div className="col-6 px-5">
          <div
            style={{ backgroundImage: `url(${c2})` }}
            className="carausel-item border"
          >
            <div className="ps-5 pt-3 cr-text">
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
