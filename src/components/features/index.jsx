import React from "react";
import "./features.css";
import {
  MonetizationOn,
  SettingsSuggest,
  SupportAgent,
} from "@mui/icons-material";

const Features = () => {
  return (
    <div id="features" className="features">
      <div 
        className="features_innerCont"
        data-aos="flip-up" 
        data-aos-duration="1000"
        >
        <div className="title_container">
          <h1 className="title"> Our Features</h1>
          <p className="subtitle">
            Powerful features to evaluate your projects
          </p>
        </div>
        <div className="features_details">
          <div className="feature_one feature_item">
            <div className="feature_inner_cont">
              <div className="icon">
                <MonetizationOn fontSize="large" style={{ fill: "#33c984" }} />
              </div>
              <p className="first_text">Secure Payment</p>
              <p className="second_text">
                Our primary goal is to ensure secure and encrypted payment
              </p>
            </div>
          </div>
          <div className="feature_two feature_item">
            <div className="feature_inner_cont">
              <div className="icon">
                <SettingsSuggest
                  fontSize="large"
                  style={{ fill: "#bb455c" }}
                />
              </div>
              <p className="first_text">Easy to use</p>
              <p className="second_text">
                Integrated with a proper user design and experience flow, usage
                comes easy
              </p>
            </div>
          </div>
          <div className="feature_three feature_item">
            <div className="feature_inner_cont">
              <div className="icon">
                <SupportAgent fontSize="large" style={{ fill: "#33c984" }} />
              </div>
              <p className="first_text">Support</p>
              <p className="second_text">
                Avalable 24/5 customer service operation. Effectively lay your
                complaints and watch it get resolved in a matter of minutes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
