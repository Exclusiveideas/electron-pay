import React from "react";
import "./knowMore.css";

const KnowMore = ({ img, infoOne, infoTwo, infoThree, reverse }) => {


  return (
    <div className={`knowMore ${reverse && "row_reverse"}`}>
      <div
        className="knowMore_left"
        style={{
          justifyContent: reverse ? "flex-start" : "flex-end",
          paddingRight: !reverse && "2.5rem",
          paddingLeft: reverse && "2.5rem",
        }}
        data-aos={reverse ? "fade-left" : "fade-right"} data-aos-duration="1000"
      >
        <img
          src={img}
          alt="mobile app section"
          style={{ transform: reverse ? "rotate(-10deg)" : "rotate(10deg)" }}
        />
        {!reverse ? (
          <>
            <svg
              viewBox="0 0 230 230"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="svg_circ_one"
            >
              <circle cx="115" cy="115" r="115" fill="#eeacb9" />
            </svg>
            <svg
              viewBox="0 0 230 230"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="svg_circ_two"
            >
              <circle cx="115" cy="115" r="115" fill="#f29523" />
            </svg>
          </>
        ) : (
          <>
            <svg
              viewBox="0 0 230 230"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="svg_circ_one_reverse"
            >
              <circle cx="115" cy="115" r="115" fill="#f29523" />
            </svg>
          </>
        )}
      </div>
      <div
        className="knowMore_right"
        style={{ justifyContent: reverse && "center" }}
      >
        <div className="knowMore_right_info" data-aos={reverse ? "fade-right" : "fade-left"} data-aos-duration="1000">
          <div className="knowMore_right_info_one">
            <p>{infoOne}</p>
          </div>
          <div className="knowMore_right_info_two">
            <h1>{infoTwo}</h1>
          </div>
          <div className="knowMore_right_info_three">
            <p>{infoThree}</p>
          </div>
          <div className="knowMore_right_info_four">
            <div className="know_more">Know More</div>
          </div>
        </div>
        {reverse ? (
          <>
            <svg
              viewBox="0 0 230 230"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="svg_circ_two_reverse"
            >
              <circle cx="115" cy="115" r="115" fill="#d8e964" />
            </svg>
            <svg
              viewBox="0 0 230 230"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="svg_circ_three_reverse"
            >
              <circle cx="115" cy="115" r="115" fill="#eeacb9" />
            </svg>
          </>
        ) : (
          <>
            <svg
              viewBox="0 0 230 230"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="svg_circ_three"
            >
              <circle cx="115" cy="115" r="115" fill="#d8e964" />
            </svg>
          </>
        )}
      </div>
    </div>
  );
};

export default KnowMore;
