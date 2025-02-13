import React from "react";
import header1 from "../css/header.css";
const header = () => {
  return (
    <div className="container-fluid header w-100 position-relative p-0 m-0">
      <div className="bg-img position-absolute top-0 start-0 w-100"> </div>
      <div className="h-text position-absolute top-0 start-0 w-50 ps-5 pt-5">
        <p>Made with Love</p>
        <p className="w-75">Welcome to the world of nature and organic.</p>
        <a href="#" className="btn fs-4 p-3">
          Explore Now <i class="fa-solid fa-circle-arrow-right fs-5 ms-2"></i>
        </a>
      </div>
    </div>
  );
};

export default header;
