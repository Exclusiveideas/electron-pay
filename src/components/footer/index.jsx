import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_top">
        <hr />
      </div>
      <div className="footer_bottom">
        <div className="footer_bottom_wrapper">
          <div className="product_reintro">
            <h2>ElectronPay</h2>
            <p>
              Be a part of a refreshing solution with us, making transactions as
              easy as taking a breath
            </p>
          </div>
          <div className="useful_link_wrapper">
            <div className="useful_links_section">
              <p className="link_header">Entity types</p>
              <p>Knowledge types</p>
              <p>Security</p>
              <p>Privacy policies</p>
              <p>Partners</p>
            </div>
            <div className="useful_links_section">
              <p className="link_header">Services</p>
              <p>Contact Us</p>
              <p>Blog</p>
              <p>Press</p>
              <p>Help Center</p>
            </div>
            <div className="useful_links_section">
              <p className="link_header">Resources</p>
              <p>Pricing</p>
              <p>Contact</p>
              <p>Terms & Conditions</p>
              <p>FAQ</p>
            </div>
            <div className="useful_links_section">
              <p className="link_header">Support</p>
              <p>Affiliates</p>
              <p>Sitemap</p>
              <p>Cancellation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
