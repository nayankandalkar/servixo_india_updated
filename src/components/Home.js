import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Slider2 from './Slider2'
import Footer from './Footer'
import Slider from './slider3'
import Slider4 from './slider4'
import Slider5 from './Slider5'
import Categories from './Categories'
import ServicesVideoSnap from './ServicesVideoSnap'
import ServiceSubCategory from './ServiceSubCategory'
import MostBookedServiceSubCategory from './MostBookedServiceSubCategory'
import Navbar2 from './Navbar2'
import Map from './Map'
 
import ElfSightApps from './Review'
import EventData from './EventData'
 

const Home = () => {

  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [data, setData] = useState(null); 


 // console.log(data);

  useEffect(() => {
    fetchImages();
}, []);



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
        
        setImagesLoaded(true)
        setData(data);
        return data;

        // data.data.SliderImages.forEach((item) => {
        //     urls.push(`https://servixoindia.com/servixoindia/uploads/slider-images/${item.images}`);
        // });
        //setSlideImages(urls);
       // setImagesLoaded(true); // Mark images as loaded
    } catch (error) {
        console.error('Error fetching image URLs:', error);
    }
};




  return (


    

    <div>
 

      <Navbar2></Navbar2>
    
    <Slider5></Slider5>
    <div>

  
    
  {

    imagesLoaded ?
    (<Categories  data={data} ></Categories>): (<div></div>)


  }

  </div>

  <div></div>

{
    imagesLoaded ? 
 ( <ServicesVideoSnap data={data}></ServicesVideoSnap> ) : (<div></div>) 
}

{
     imagesLoaded ? (<EventData   data={data} ></EventData>): (<div></div>)     
}

{
  imagesLoaded ?
 ( <ServiceSubCategory data={data}></ServiceSubCategory> ) : (<div></div>)
}


{
  imagesLoaded ?
  (<MostBookedServiceSubCategory data={data}></MostBookedServiceSubCategory>):(<div></div> )
}


<ElfSightApps></ElfSightApps>
 

    <Footer></Footer>



   
  
    


    </div>
  )
}

export default Home