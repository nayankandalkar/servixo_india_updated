import React from 'react'
import "./MostBooked.css"
import Map from './Map'

const MostBookedServiceSubCategory = ({data}) => {
  return (
    <div>

    
    <p  className='a'>Most Booked Service  SubCategory</p>

    <div className='mostbooked-map-service'>

 
    <div className='mostbooked-container'>
    <div  className='data'>
    
 
    <div className='container'>

    {
            data.data.MostBookedServiceSubCategory.map((data,index)=>(
                <div className='services' key={index}>
                    <p className='text'>{data.service_name}</p>
                    <img src={`https://servixoindia.com/servixoindia/uploads/service/${data.service_image}`}></img>
                </div>
            ))
        }

    </div>

    </div>
       
    </div>


    <div className=' '>
      
{/* 
    <iframe className='most-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7004.213131067984!2d77.37497169113364!3d28.626568070056692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceff42528a613%3A0x9d28c928f1474a32!2sChetu%2C%20Inc%20-%20Training%20and%20Development%20Centre!5e0!3m2!1sen!2sin!4v1711086797253!5m2!1sen!2sin" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    */}

{/* 
    <iframe className='most-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14994.93211731181!2d79.30407395!3d20.0197165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd32a104dba9295%3A0xd1acf8882f6ea902!2sWCL%20Colony%2C%20Durgapur%2C%20Chandrapur%2C%20Maharashtra%20442404!5e0!3m2!1sen!2sin!4v1711704685229!5m2!1sen!2sin"   style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}


    <iframe   className='most-map'  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.868281991233!2d79.30279279999999!3d20.0140422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd32b4e5ca202bd%3A0x5de3db623e4a44f3!2sServixoIndia!5e0!3m2!1sen!2sin!4v1712143432609!5m2!1sen!2sin" width="600" height="450"  style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

    </div>


     
    </div>

    </div>
  )
}

export default MostBookedServiceSubCategory