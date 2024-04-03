import React, { useState } from 'react'
import "./Category.css"

const Categories = ({data}) => {

 
//console.log(data.data.AllCategories);
const base ="https://servixoindia.com/servixoindia/uploads/category/"
    
  return (
    <div className='data'>
    <p className='para' >  Categories We provide</p> 
    
    <div className='conatiner'>
        {
            data.data.AllCategories.map((data, index)=>(
                    <div key={index} className='category'>
                         <div>
 
                         <img src={`${base}${data.category_image}`}></img>
                         <p> {data.category_name}</p>
                         </div>
                    </div>
            ))
        }
    </div>
    
    </div>
  )
}

export default Categories