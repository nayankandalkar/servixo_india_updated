import React, { useState, useEffect } from 'react';
import './slider3.css'; // Import your CSS file
 import Image1 from '../ascets/image-1.jpg'
 import Image2 from '../ascets/image-2.jpg'
 import Image3 from '../ascets/image-3.jpg'
 import Image4 from '../ascets/image-4.jpg'
 import Image5 from '../ascets/image-5.jpg'

 //const slideImages = [`${Image1}`, `${Image2}`, `${Image3}`, `${Image4}`, `${Image5}`];




 function Slider() {

    const [img1, setImage]=useState();

   //  setImage(Image1);

    
    const [counter, setCounter] = useState(0);
    const slideImages = [`${Image1}`, `${Image2}`, `${Image3}`, `${Image4}`, `${Image5}`];


    useEffect(() => {
        const interval = setInterval(() => {
            slideNext();
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const slideNext = () => {
        setCounter((prevCounter) => (prevCounter + 1) % slideImages.length);
    };

    const slidePrev = () => {
        setCounter((prevCounter) => (prevCounter === 0 ? slideImages.length - 1 : prevCounter - 1));
    };

    const switchImage = (index) => {
        setCounter(index);
    };

    return (
        <div className="slide">
            <div className="slide-container">
                <div className="slides">
                    {slideImages.map((image, index) => (
                        <img key={index} src={image} alt={`Slide ${index + 1}`} className={index === counter ? 'active' : 'inactive'} />
                    ))}
                </div>
                <div className="buttons">
                    <span className="next" onClick={slideNext}>&#10095;</span>
                    <span className="prev" onClick={slidePrev}>&#10094;</span>
                </div>
                <div className="dotsContainer">
                    {slideImages.map((_, index) => (
                        <div key={index} className={`dot ${index === counter ? 'active' : ''}`} onClick={() => switchImage(index)}></div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Slider;