import React, { useRef, useState } from 'react';
import './testimonials.css';
import person1 from '../../assets/images/person1.jpg';
import person2 from '../../assets/images/person2.jpg';
import person3 from '../../assets/images/person3.jpg';
import person4 from '../../assets/images/person4.jpg';
import { ArrowLeft, ArrowRight }from '@mui/icons-material';

const TESTIMONIALS = [
  {
    name: "Leslie Alexander",
    img: `${person1}`,
    position: "Product Designer - Besnik",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Aliquam efficitur sollicitudin metus, et bibendum nisl lacinia in. Morbi mollis orci eu tortor dictum.`,
  },
  {
    name: "Kristin Watson",
    img: `${person2}`,
    position: "Product Designer - Besnik",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Aliquam efficitur sollicitudin metus, et bibendum nisl lacinia in. Morbi mollis orci eu tortor dictum.`,
  },
  {
    name: "Benjamin Luka",
    img: `${person3}`,
    position: "Product Designer - Besnik",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Aliquam efficitur sollicitudin metus, et bibendum nisl lacinia in. Morbi mollis orci eu tortor dictum.`,
  },
  {
    name: "Fred Albert",
    img: `${person4}`,
    position: "Product Designer - Besnik",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Aliquam efficitur sollicitudin metus, et bibendum nisl lacinia in. Morbi mollis orci eu tortor dictum.`,
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