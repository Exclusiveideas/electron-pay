import React from "react";
import "./application.css";
import mobile_tran_one from "../../assets/images/mobile_tran_one.png";
import mobile_tran_two from "../../assets/images/mobile_tran_two.png";
import mobile_tran_three from "../../assets/images/mobile_tran_three.png";
import playstore from "../../assets/images/playstore.png";
import applestore from "../../assets/images/applestore.png";

const Application = () => {

  return (
    <div id="application" className="application">
      <div className="main_text">
        <h1>Download Our App</h1>
      </div>
      <div className="app_images">
        <div className="app_image">
          <img
            src={mobile_tran_one}
            alt="3D Phone"
            className="mobile_app"
            data-aos="fade-right"
            data-aos-duration="1000"
          />
        </div>
        <div className="app_image larger">
          <img
            src={mobile_tran_three}
            alt="3D Phone"
            className="mobile_app"
            data-aos="fade-up"
            data-aos-duration="1000"
          />
        </div>
        <div className="app_image">
          <img
            src={mobile_tran_two}
            alt="3D Phone"
            className="mobile_app"
            data-aos="fade-left"
            data-aos-duration="1000"
          />
        </div>
      </div>
      <div className="download_buttons">
        <div className="appstore playstore">
          <img
            src={playstore}
            alt="Google playstore"
            className="appstore_logo"
          />
          <div className="playstore_info">
            <p>GET IT ON</p>
            <h3>Google Play</h3>
          </div>
        </div>
        <div className="appstore">
          <img
            src={applestore}
            alt="Apple appstore"
            className="appstore_logo"
          />
          <div className="playstore_info">
            <p>Download on the</p>
            <h3>App Store</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Application;
