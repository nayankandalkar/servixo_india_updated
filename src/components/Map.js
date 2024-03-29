import React from 'react'
import './Map.css'
import { FaUser } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { FaStarHalf } from "react-icons/fa6";

const Map = () => {
  return (
    <div>Map
    
    
    <div className='map'>
    <iframe className='google' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7004.213131067984!2d77.37497169113364!3d28.626568070056692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceff42528a613%3A0x9d28c928f1474a32!2sChetu%2C%20Inc%20-%20Training%20and%20Development%20Centre!5e0!3m2!1sen!2sin!4v1711086797253!5m2!1sen!2sin" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
   
   <div>
      <div>
      <FaUser />
      <div>it is very useful</div>
      <div>
      <IoStar      className='start'/>
      <IoStar   />
      <IoStar     />
      <IoStar   />
       <FaStarHalf  />

      </div>
       
      </div>
   </div>
    </div>
    </div>
  )
}

export default Map