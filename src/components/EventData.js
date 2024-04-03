import React from 'react'
import './Events.css'

const EventData = ({data}) => {

console.log("ok");
console.log(data.data.Events)
  return (
    <div>
       
       
       <div  className='event-container'>

          
       <div  >
            {
                data.data.Events.map((events,index)=>(
                    <div className='event-para' key={index}>
                    <h1>{events.name}</h1>
                    <p>{events.description}</p>
                    <button>Explore More</button>
                    </div>
                       

                ))
            }
           </div>


          <div className='event-image'>


          {
            data.data.Events.map((event,index)=>(
                <div key={index}>'
         

                  <img src={`${data.data.EventImageURL}/${event.event_image}`}></img>

                </div>
            ))
        }


          </div>


            




       </div>
       
       

    </div>
  )
}

export default EventData