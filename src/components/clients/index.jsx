import React from "react";
import "./clients.css";
import toss from "../../assets/images/toss.png";
import google from "../../assets/images/google.png";
import fedex from "../../assets/images/fedex.png";
import blender from "../../assets/images/blender.png";
import nokia from "../../assets/images/nokia.png";

const CLIENTS = [
  toss,
  google,
  fedex,
  nokia,
  blender,
];

const Clients = () => {
  return (
    <div id="clients" className="clients_section">
      <div className="clients_inner-wrapper">
        <div className="title_wrapper">
          <h2>Our Clients</h2>
        </div>
        <div className="clients_lists">
          {CLIENTS.map((client, i) => (
            <div key={i} className="client_tag">
              <img src={client} alt="Client logo" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
