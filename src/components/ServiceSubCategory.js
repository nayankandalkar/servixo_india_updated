
import React from 'react'
import './ServiceSubCategory.css'

const ServiceSubCategory = ({data}) => {
  return (
    <div className='data'>

    <p className='a'>services </p>

<div className='container'>


{
             data.data.serviceSubCategory.map((data,index)=>(
           <div key={index} className='services'>
                 <p className='text'>{` ${data.service_name}` }</p>
                 <img src={`https://servixoindia.com/servixoindia/uploads/service/${data.service_image}`}></img>
           </div>
             ))
                 
            
        }

</div>
        
    </div>
  )
}

export default ServiceSubCategory