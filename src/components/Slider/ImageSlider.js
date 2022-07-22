import React, { useState } from 'react'

import './ImageSlider.css';

import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai'
import {motion} from 'framer-motion/dist/framer-motion';

const ImageSlider = ({slides}) => {
      const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <motion.section className='slider' initial={{opacity:0}} animate={ {opacity:1}} exit={ {opacity:0}}>
      <AiOutlineLeft className='left-arrow' onClick={prevSlide} />
      <AiOutlineRight className='right-arrow' onClick={nextSlide} />
      {slides.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
                {index === current && (
              <div className='image_container'>
                        <img src={slide.image} alt={slide.title} className='image' />
                        <div className='img-text'>
                        <h4>{slide.title}</h4>
                        <div className='text-body'>{slide.description}</div>
              </div>
              </div>
            )}
          </div>
        );
      })}
    </motion.section>
  );
};

export default ImageSlider;