import React from "react";
import { useState } from "react";

import { Link } from "react-router-dom";

import "./Footer.css";

import arrow from "./images/down-arrow.png";

export default function Footer() {
  const [currentFooterCategory, setCurrentFooterCategory] = useState(null);

  function dropFooter(index) {
    if (currentFooterCategory === index) {
      setCurrentFooterCategory(null);
    } else {
      setCurrentFooterCategory(index);
    }
  }

  // Scroll to the very top of the page
  function handleLinkClick() {
    window.scrollTo(0, 0);
  }

  // <Link to="/watches" className='no-underline'> <li> Watches </li> </Link>
  // <Link to="/boutiques" className='no-underline'> <li> Boutiques </li> </Link>
  // <Link to="/brand" className='no-underline'> <li> Brand </li></Link>

  return (
    <footer className="footer-container">
      <div className="footer-contents">
        <div className="footer-1 footer-column">
          <h3>
            The Collections
            <img src={arrow} alt="arrow" onClick={() => dropFooter(0)} />
          </h3>
          <ul className={currentFooterCategory === 0 ? "activeFooter" : ""}>
            <Link
              to="/watches"
              className="no-underline"
              onClick={handleLinkClick}
            >
              <li> Trojan </li>
            </Link>
            <Link
              to="/watches"
              className="no-underline"
              onClick={handleLinkClick}
            >
              <li> Ruby </li>
            </Link>
            <Link
              to="/watches"
              className="no-underline"
              onClick={handleLinkClick}
            >
              <li> Atlas </li>
            </Link>
            <Link
              to="/watches"
              className="no-underline"
              onClick={handleLinkClick}
            >
              <li> Emerald </li>
            </Link>
            <Link
              to="/watches"
              className="no-underline"
              onClick={handleLinkClick}
            >
              <li> Sterling </li>
            </Link>
            <Link
              to="/watches"
              className="no-underline"
              onClick={handleLinkClick}
            >
              <li> Midas </li>
            </Link>
            <Link
              to="/watches"
              className="no-underline"
              onClick={handleLinkClick}
            >
              <li> Limited </li>
            </Link>
          </ul>
        </div>

        <div className="footer-2 footer-column">
          <h3>
            About Us
            <img src={arrow} alt="arrow" onClick={() => dropFooter(1)} />
          </h3>
          <ul className={currentFooterCategory === 1 ? "activeFooter" : ""}>
            <Link
              to="/boutiques"
              className="no-underline"
              onClick={handleLinkClick}
            >
              <li> Our Boutiques </li>
            </Link>
            <Link
              to="/brand"
              className="no-underline"
              onClick={handleLinkClick}
            >
              <li> Our Brand </li>
            </Link>
            <Link
              to="/watches"
              className="no-underline"
              onClick={handleLinkClick}
            >
              <li> Our Watches </li>
            </Link>
          </ul>
        </div>

        <div className="footer-3 footer-column">
          <h3 onClick={() => dropFooter(2)}>
            Support
            <img src={arrow} alt="arrow" onClick={() => dropFooter(2)} />
          </h3>
          <ul className={currentFooterCategory === 2 ? "activeFooter" : ""}>
            <Link to="/" className="no-underline" onClick={handleLinkClick}>
              <li> Contact Us </li>
            </Link>
            <Link to="/" className="no-underline" onClick={handleLinkClick}>
              <li> FAQ </li>
            </Link>
            <Link to="/" className="no-underline" onClick={handleLinkClick}>
              <li> Customer Care </li>
            </Link>
            <Link to="/" className="no-underline" onClick={handleLinkClick}>
              <li> Warranty </li>
            </Link>
            <Link to="/" className="no-underline" onClick={handleLinkClick}>
              <li> Shipping </li>
            </Link>
            <Link to="/" className="no-underline" onClick={handleLinkClick}>
              <li> Returns </li>
            </Link>
          </ul>
        </div>

        <div className="footer-4 footer-column">
          <h3 onClick={() => dropFooter(3)}>
            Privacy and Terms
            <img src={arrow} alt="arrow" onClick={() => dropFooter(3)} />
          </h3>
          <ul className={currentFooterCategory === 3 ? "activeFooter" : ""}>
            <Link to="/" className="no-underline" onClick={handleLinkClick}>
              <li> Terms & Condition </li>
            </Link>
            <Link to="/" className="no-underline" onClick={handleLinkClick}>
              <li> Privacy Policy </li>
            </Link>
            <Link to="/" className="no-underline" onClick={handleLinkClick}>
              <li> Cookies Settings </li>
            </Link>
            <Link to="/" className="no-underline" onClick={handleLinkClick}>
              <li> Terms of Use </li>
            </Link>
            <Link to="/" className="no-underline" onClick={handleLinkClick}>
              <li> Human Rights Policy </li>
            </Link>
            <Link to="/" className="no-underline" onClick={handleLinkClick}>
              <li> Supply Chain Policies </li>
            </Link>
            <Link to="/" className="no-underline" onClick={handleLinkClick}>
              <li> Legal Notice </li>
            </Link>
          </ul>
        </div>
      </div>

      <span> © TAG Heuer Brand of LVMH Swiss Manufactures SA - 2023 </span>
    </footer>
  );
}
