import React from 'react';
import './ServiceVideoSnap.css'

const ServicesVideoSnap = ({ data }) => {
    console.log(data.data.ServiceSnapVideos);
    return (

        <div> 

          
        <div className='event-snap' >'
     

        <div className='service-data'>
       
        <p  className='heading'>Services Snap</p> 

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

              <div>
              <p  className='heading'> Event</p> 

 
         <div  className='event-box'  >

           

            {
                 
              <img src={`https://servixoindia.com/servixoindia/uploads/event-image/${data.data.Events[0].event_image}`} ></img>
            
            }

            {
              <h1>{data.data.Events[0].name}</h1>  
            }

            {
                <p>{data.data.Events[0].description}</p>
            }
         </div>

         </div>
          
        </div>

        </div>
    );
};

export default ServicesVideoSnap;
