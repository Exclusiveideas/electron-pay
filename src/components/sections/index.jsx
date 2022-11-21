import React from "react";
import "./sections.css";
import Hero from "../hero";
import KnowMore from "../knowMore";
import Features from "../features";
import Application from "../application";
import Testimonials from "../testimonials";
import Clients from "../clients";
import mobile_spotify from "../../assets/images/mobile_spotify.png";
import mobile_netflix from "../../assets/images/mobile_netflix.png";

const Sections = ({ setImagesLoaded, imagesLoaded }) => {


  return (
    <div className="sections">
      <Hero />
      <KnowMore
        img={mobile_spotify}
        infoOne="Surest E-Transaction platform"
        infoTwo="The easiest way to pay money"
        infoThree="The first list you see in the next screen is your last
          transaction. They will be placed at the top, and of course, you
          can alaso add new recipient."
      />
      <Features />
      <KnowMore
        img={mobile_netflix}
        infoOne="Powerful routing & payout engine"
        infoTwo="Boarderless transfers just in a click"
        infoThree="The first list you see in the next screen is your last
          transaction. They will be placed at the top, and of course, you
          can alaso add new recipient."
        reverse
      />
      <Application />
      <Testimonials />
      <Clients />
    </div>
  );
};

export default Sections;
