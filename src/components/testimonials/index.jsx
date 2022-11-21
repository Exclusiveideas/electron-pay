import React, { useRef, useState } from 'react';
import './testimonials.css';
import img from '../../assets/images/test.png';
import { ArrowLeft, ArrowRight }from '@mui/icons-material';

const TESTIMONIALS = [
  {
    name: "1Leslie Alexander",
    img: `${img}`,
    position: "Product Designer - Besnik",
    text: `After applying the same opacity to both texts, we can see that the difference is clear.
    Clearly, the result is different. One of them is gray, the other blue-gray`,
  },
  {
    name: "2Kristin Watson",
    img: `${img}`,
    position: "Product Designer - Besnik",
    text: `After applying the same opacity to both texts, we can see that the difference is clear.
    Clearly, the result is different. One of them is gray, the other blue-gray`,
  },
  {
    name: "3Kristin Watson",
    img: `${img}`,
    position: "Product Designer - Besnik",
    text: `After applying the same opacity to both texts, we can see that the difference is clear.
    Clearly, the result is different. One of them is gray, the other blue-gray`,
  },
  {
    name: "4Kristin Watson",
    img: `${img}`,
    position: "Product Designer - Besnik",
    text: `After applying the same opacity to both texts, we can see that the difference is clear.
    Clearly, the result is different. One of them is gray, the other blue-gray`,
  }
]


const Testimonials = () => { 
  const testimonialRef = useRef(null)

  const goForward = () => {
    testimonialRef.current.scrollLeft += 330
  }

  const goBack = (e) => {
    testimonialRef.current.scrollLeft -= 330
  }

  return (
    <div id="testimonials" className='testimonials'>
      <div className="title_wrapper">
        <h1>Testimonials</h1>
      </div>
      <div ref={testimonialRef} className="testimonials_wrapper">
        {TESTIMONIALS.map((testimonial, i) => (
        <div key={i} className="testimonial_wrapper">
          <p className="testimonial_text">{testimonial.text}</p>
          <div className="client_info">
            <div className="img_wrapper">
            <img src={testimonial.img} alt="client" />
            </div>
            <div className="client_info_wrapper">
              <p>{testimonial.name}</p>
              <p>{testimonial.position}</p>
            </div>
          </div>
        </div>
        ))}
        <div className="prevButton" onClick={goBack}>
          <ArrowLeft className='prev_icon' style={{fontSize: "70px"}} />
        </div>
        <div className="nextButton" onClick={goForward}>
          <ArrowRight className="next_icon" style={{ fontSize: "70px"}} />
        </div>
      </div>
      <div className="updated_section">
        <div className="updated_wrapper">
          <div className="updated_wrapper-info">
            <h2>Want to stay updated</h2>
            <p>Be the first to know with every update, improvements or amazing offers that are available.</p>
          </div>
          <div className="updated_button">
              Know More
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials;