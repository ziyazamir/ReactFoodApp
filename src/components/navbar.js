import React from "react";
import navbarcss from "../css/navbar.css";
import { FaBeer } from "react-icons/fa";
import logo from "../images/logo1.png";
import { Link } from "react-router-dom";
const navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid row m-0 p-0">
        <div className="col-lg-4 col-sm-8 order-lg-first col-6">
          <div className="text-center text-lg-start row">
            <div className="col-md-6 col-12 col-lg-3">
              <Link to="/">
                <img id="logo" className="float-md-end" src={logo} alt="" />
              </Link>
            </div>
            <div className="col-6">
              <Link id="brand-name" className="navbar-brand d-none d-md-block fs-1 mt-2 text-start" to="#">
                Brand
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-sm-2 order-sm-first order-first col-3">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse float-lg-end navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ps-5">
              <li className="nav-item ms-5 fs-5">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/ReactApp/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item ms-5 fs-5">
                <Link className="nav-link" to="/ReactApp/about">
                  About
                </Link>
              </li>
              <li className="nav-item ms-5 fs-5 dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Menu
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Vegetables
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Fruits
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item" href="#">
                      Meat
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item ms-5 fs-5">
                <Link to="/ReactApp/contact" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-2 col-sm-2 text-end px-lg-0 col-3">
          <div id="cart-no" className="btn rounded-pill px-0">
            <span
              id="cart-icon"
              className="fs-4 rounded-circle border-0"
            >
              <i class="fa-solid fa-cart-shopping mt-2"></i>
            </span>
            <span className="fs-4 pt-1 float-end pe-4 d-none d-lg-block">Cart 0</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default navbar;
