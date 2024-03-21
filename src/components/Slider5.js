import React, { useState, useEffect } from 'react';
import './slider3.css'; // Import your CSS file

function Slider5() {
    const [counter, setCounter] = useState(0);
    const [slideImages, setSlideImages] = useState([]);
    const [imagesLoaded, setImagesLoaded] = useState(false);

    useEffect(() => {
        fetchImages();
    }, []);

    useEffect(() => {
        if (imagesLoaded) {
            const intervalId = setInterval(() => {
                slideNext();
            }, 3000);

            return () => clearInterval(intervalId); // Clear the interval when component unmounts
        }
    }, [imagesLoaded]);

    const fetchImages = async () => {
        try {
            const urls = [];
            const url = 'https://servixoindia.com/servixoindia/api/get-home-page-data';
            const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiYjlkMDNiMDFkYmJiODI0MDQ5MjE0ZjQwNGFhOTk0OWM2ZGY2ODhlNjU1NGE3MmRkZmZmYTVkOTE0ODY1ZTZhNjA1NTQ1MzAzZThlOTJmZDAiLCJpYXQiOjE3MTA3MzY5MjUuNzY3ODUzLCJuYmYiOjE3MTA3MzY5MjUuNzY3ODU2LCJleHAiOjE3NDIyNzI5MjUuNzYzNzQ0LCJzdWIiOiIxNSIsInNjb3BlcyI6W119.Nvhqx5jq99VQyiXbpbUa1kEPYmnfoxwgjepWQBXkwUDSUAn15tr7XMXtvP1gUZA331j9gcHY3daZoi30MGEil62CGD4HjokWVPqVVv0OK_KQY-DBM1XO5HYACQIO4zV2-vgiFJhkwEOlj12J8G6YJhqgbxevGWsgPKe3SV-QXiGBnlaHZDtx7lI5YZxYsH7FHbA_NryH-ZP45JAyaWBFL5eJL3xwrvdt1U8EmQwisPFejoyFW5LS2_FoMUw6GtpMS6hIBuGENBMLxL6WZWbTXAaBdgu44xwNOYEa4XdOec9eJyAAWN9SSbQas-B5tFHVqJvWgiGMF6r-eQn_jh2JKdY0NeF5g7zD9O5Np9Dj3igBh2okTvpzy7nbJFECTwuPjacpQzTHAPV3OBp9Ebu__dXEanXE9IoPoNzDcgls9MrrfJsoBh44V5Fd6UhcZmZj05u-U0Jw-VV_0wLo5dXM9FwwIMPVpcqA7SCakJMDmwTtFaApgM3ZMlR2dMjc67C1i0u-IJMVm_HAzPktxCuA6T1f_g_vfawHdtnjbNEEXNyyQWs75oMveDowSTVIbN6ZiyBitFAbJd9kT2KIfs1Eo-25NKNFVQO0T--WOng_ZGepvDye9JxzzOyvgBCGrizqDRVVZFBRag44LbNaZzdG_g-7-isdyblPBZ6HuUSSYDk';
            const requestData = {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
            };

            const response = await fetch(url, requestData);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            data.data.SliderImages.forEach((item) => {
                urls.push(`https://servixoindia.com/servixoindia/uploads/slider-images/${item.images}`);
            });
            setSlideImages(urls);
            setImagesLoaded(true); // Mark images as loaded
        } catch (error) {
            console.error('Error fetching image URLs:', error);
        }
    };

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
        <div className="slide  a  ">
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

export default Slider5;
