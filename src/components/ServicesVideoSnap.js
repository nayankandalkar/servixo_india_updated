import React from 'react';
import './ServiceVideoSnap.css'

const ServicesVideoSnap = ({ data }) => {
    console.log(data.data.ServiceSnapVideos);
    return (

        <div> 

          
        <div className='event-snap' >'
     

        <div className='service-data'>
       
        <p  className='heading'>our Services video Snap</p> 

            <div className='container'>

                {data.data.ServiceSnapVideos.map((videoData, index) => (
                    <div key={index}  >
                      
                        <video controls
                        autoPlay
                        loop
                        className='video'
                        >
                            <source src={`https://servixoindia.com/servixoindia/uploads/slider-video/${videoData.video}`}   />
                        </video>
                    </div>
                ))}
            </div>



            
        </div>

           
        </div>

        </div>
    );
};

export default ServicesVideoSnap;
