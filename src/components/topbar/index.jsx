import { CancelOutlined, MenuOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import "./topbar.css";
import { Link } from "react-scroll";

const Topbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [firstLoad, setFirstLoad] = useState(false);

  const openNav = () => {
    setFirstLoad(true);
    setNavOpen(true);
  };

  const closeNav = () => {
    setNavOpen(false);
  };

  return (
    <div className="background">
      <svg
        viewBox="0 0 230 230"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="svg_circle_one"
      >
        <circle cx="115" cy="115" r="115" fill="#2f2f2f" />
      </svg>
      <div className="topbar">
        <div className="logo">
          <h2 onClick={() => window.scrollTo(0, 0)}>ElectronPay</h2>
          {!navOpen ? (
            <MenuOutlined
              onClick={openNav}
              fontSize="large"
              className="menu_button"
            />
          ) : (
            <CancelOutlined
              onClick={closeNav}
              fontSize="large"
              className="menu_button"
            />
          )}
        </div>
        <div className="nav_menu">
          <ul className="nav_menuList">
            <Link className="links" activeClass="activeLink" spy smooth to="features">
              <li>Features</li>
              <svg
                width="59"
                height="1"
                viewBox="0 0 59 1"
                className="svg_line"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line className="line_el" y1="0.5" x1="30" y2="0.5" />
                <line className="line_el" x1="29" y1="0.5" x2="59" y2="0.5" />
              </svg>
            </Link>
            <Link className="links" activeClass="activeLink" spy smooth to="application">
              <li>Application</li>
              <svg
                width="59"
                height="1"
                viewBox="0 0 59 1"
                className="svg_line"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line y1="0.5" x1="30" y2="0.5" className="line_el" />
                <line x1="29" y1="0.5" x2="59" y2="0.5" className="line_el" />
              </svg>
            </Link>
            <Link className="links" activeClass="activeLink" spy smooth to="testimonials">
              <li>Testimonials</li>
              <svg
                width="59"
                height="1"
                viewBox="0 0 59 1"
                className="svg_line"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line y1="0.5" x1="30" y2="0.5" className="line_el" />
                <line x1="29" y1="0.5" x2="59" y2="0.5" className="line_el"/>
              </svg>
            </Link>
            <Link className="links" activeClass="activeLink" spy smooth to="clients">
              <li>Clients</li>
              <svg
                width="59"
                height="1"
                viewBox="0 0 59 1"
                className="svg_line"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line y1="0.5" x1="30" y2="0.5" className="line_el" />
                <line x1="29" y1="0.5" x2="59" y2="0.5" className="line_el" />
              </svg>
            </Link>
          </ul>
        </div>
        <div
          className={`mobile_nav_menu ${
            firstLoad && (navOpen ? "menu_appear" : "menu_disappear")
          }`}
        >
          <ul className="mobile_nav_menuList">
            <Link activeClass="activeLink" spy smooth to="features">
              <li onClick={closeNav}>Features</li>
            </Link>
            <Link activeClass="activeLink" spy smooth to="application">
              <li onClick={closeNav}>Application</li>
            </Link>
            <Link activeClass="activeLink" spy smooth to="testimonials">
              <li onClick={closeNav}>Testimonials</li>
            </Link>
            <Link activeClass="activeLink" spy smooth to="clients">
              <li onClick={closeNav}>Clients</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
