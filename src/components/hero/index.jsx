import React from "react";
import "./hero.css";
import mobile_tran_one from "../../assets/images/mobile_tran_one.png";
import { KeyboardArrowDown, ArrowDropUp } from "@mui/icons-material";

const Hero = () => {

  return (
    <div className="hero">
      <div className="hero_left">
        <div className="hero_info" data-aos="fade-up" data-aos-duration="1000">
          <div className="hero_info_one">
            <div className="new_alert">
              <p>New</p>
            </div>
            <p>
              We just launched new{" "}
              <span className="hero_info_one-link">Crypto-Transfer</span>
            </p>
          </div>
          <div className="hero_info_two">
            <h1>Fastest Money Transfer Without Any Fustrations</h1>
          </div>
          <div className="hero_info_three">
            <p>
              With ElectronPay you can transfer your money in a second. We also
              provide you with secure transfer, No more more fustrations -
              Handle your money with ease.
            </p>
          </div>
          <div className="hero_info_four">
            <div className="download_now">Download Now</div>
          </div>
        </div>
      </div>
      <div className="hero_right">
        <div className="hero_right_elements">
          <img
            src={mobile_tran_one}
            alt="3D Phone"
            className="mobile_phone"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-offset="-50"
            data-aos-delay="750"
          />
          <div
            className="transaction_tag"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="tag_left">
              <div className="tag_left_bitcoin">
                <div className="bitcoin_logo">
                  <h1>B</h1>
                </div>
                <p>Bitcoin</p>
              </div>
              <h3>3.521079</h3>
              <h5>$19.283 USD</h5>
              <div className="expand">
                <div className="expand_innerCont">
                  <KeyboardArrowDown style={{ fill: "#e9886a" }} />
                </div>
              </div>
            </div>
            <div className="tag_right">
              <div className="tag_right_top">
                <span>BTC</span>
                <KeyboardArrowDown style={{ fill: "#e9886a" }} />
              </div>
              <div className="percent_diff">
                <ArrowDropUp />
                <p>13%</p>
              </div>
            </div>
          </div>
          <svg
            viewBox="0 0 230 230"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="svg_circle_two"
          >
            <circle cx="115" cy="115" r="115" fill="#2DC680" />
          </svg>
          <svg
            viewBox="0 0 230 230"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="svg_circle_three"
          >
            <circle cx="115" cy="115" r="115" fill="#ce2e4e" />
          </svg>
        </div>
      </div>
      <svg
        width="293"
        height="307"
        viewBox="0 0 293 307"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="svg_multi_circle_one"
      >
        <path
          d="M287.897 158.899C284.739 241.61 218.688 305.865 140.796 302.891C62.9032 299.917 1.94485 230.812 5.10304 148.101C8.26124 65.3902 74.3118 1.13465 152.204 4.10887C230.097 7.08308 291.055 76.1883 287.897 158.899Z"
          stroke="#636262"
          strokeWidth="8"
        />
        <path
          d="M280 171.5C280 184.918 272.372 197.447 259.273 206.78C246.181 216.106 227.89 222 207.5 222C187.11 222 168.819 216.106 155.727 206.78C142.628 197.447 135 184.918 135 171.5C135 158.082 142.628 145.553 155.727 136.22C168.819 126.894 187.11 121 207.5 121C227.89 121 246.181 126.894 259.273 136.22C272.372 145.553 280 158.082 280 171.5Z"
          stroke="#636262"
          strokeWidth="8"
        />
        <path
          d="M280 169C280 211.982 237.953 248 184.5 248C131.047 248 89 211.982 89 169C89 126.018 131.047 90 184.5 90C237.953 90 280 126.018 280 169Z"
          stroke="#636262"
          strokeWidth="8"
        />
        <path
          d="M280 161C280 225.633 227.826 278 163.5 278C99.1744 278 47 225.633 47 161C47 96.3671 99.1744 44 163.5 44C227.826 44 280 96.3671 280 161Z"
          stroke="#636262"
          strokeWidth="8"
        />
      </svg>
      <svg
        width="293"
        height="307"
        viewBox="0 0 293 307"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="svg_multi_circle_two"
      >
        <path
          d="M287.897 158.899C284.739 241.61 218.688 305.865 140.796 302.891C62.9032 299.917 1.94485 230.812 5.10304 148.101C8.26124 65.3902 74.3118 1.13465 152.204 4.10887C230.097 7.08308 291.055 76.1883 287.897 158.899Z"
          stroke="#636262"
          strokeWidth="8"
        />
        <path
          d="M280 171.5C280 184.918 272.372 197.447 259.273 206.78C246.181 216.106 227.89 222 207.5 222C187.11 222 168.819 216.106 155.727 206.78C142.628 197.447 135 184.918 135 171.5C135 158.082 142.628 145.553 155.727 136.22C168.819 126.894 187.11 121 207.5 121C227.89 121 246.181 126.894 259.273 136.22C272.372 145.553 280 158.082 280 171.5Z"
          stroke="#636262"
          strokeWidth="8"
        />
        <path
          d="M280 169C280 211.982 237.953 248 184.5 248C131.047 248 89 211.982 89 169C89 126.018 131.047 90 184.5 90C237.953 90 280 126.018 280 169Z"
          stroke="#636262"
          strokeWidth="8"
        />
        <path
          d="M280 161C280 225.633 227.826 278 163.5 278C99.1744 278 47 225.633 47 161C47 96.3671 99.1744 44 163.5 44C227.826 44 280 96.3671 280 161Z"
          stroke="#636262"
          strokeWidth="8"
        />
      </svg>
      <div className="bottom_white_background"></div>
    </div>
  );
};

export default Hero;
