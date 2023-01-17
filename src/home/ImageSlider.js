import React, { useState } from "react";
import { ImageSliderData } from "../data/ImageSliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

function ImageSlider({slides}) {

    const[currentIndex, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(currentIndex === length-1 ? 0 : currentIndex+1);
    }
    const prevSlide = () => {
        setCurrent(currentIndex === 0 ? length-1 : currentIndex-1);
    }

    if(!Array.isArray(slides) || slides.length <= 0){
        return null;
    }
    
    return(
        <section className="slider">
            <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
            {ImageSliderData.map((slide, index) => {
                return (
                    <div className={index === currentIndex ? 'slide active' : 'slide'} key={index} >
                        {index === currentIndex && (
                            <img src={slide.image} alt='Slider Images' className="image" /> )}
                    </div>
                );
            })}

        </section>
    );
};

export default ImageSlider;