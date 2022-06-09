import React from "react";
import navbarcss from "../css/navbar.css";
import { FaBeer } from "react-icons/fa";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
const navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid px-5">
        <Link to="/">
          <img id="logo" className="me-3" src={logo} alt="" />
        </Link>
        <a className="navbar-brand" href="#">
          <span id="brand-name" className="fs-1">
            Brand
          </span>
        </a>
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
        <div id="cart-no" className="btn rounded-pill border px-1">
          <span
            id="cart-icon"
            className="fs-4 pt-2 shadow rounded-circle border"
          >
            <i class="fa-solid fa-cart-shopping"></i>
          </span>
          <span className="fs-4 pt-1 float-end pe-4">Cart 0</span>
        </div>
      </div>
    </nav>
  );
};

export default navbar;
