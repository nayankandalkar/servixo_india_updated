import React from 'react'

const MostBookedServiceSubCategory = ({data}) => {
  return (
    <div  className='data'>
    
    <p  className='a'>Most Booked Service  SubCategory</p>

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
  )
}

export default MostBookedServiceSubCategory