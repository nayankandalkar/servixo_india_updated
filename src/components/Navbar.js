
import React from 'react'

import "./navbar.css"
import { CiSearch } from "react-icons/ci";
import { TypeAnimation } from 'react-type-animation';
import { FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className='navbar'>


    <div className='image'>
    <img src={require("../ascets/logo.png")}   ></img>
    </div>


<div   className='box-location'  >

<FaLocationDot className='location'></FaLocationDot>


    <div className='search'>


    <CiSearch>

        
      </CiSearch>

<input type='search' style={{
  
}}>

</input>
 

   
 
 
       <TypeAnimation 
       className='typing'
sequence={ ["  search for kitchen cleaning , facial , home paintaing....  ",1000 ,"" ]}
repeat={Infinity}
cursor ={true}
style={ 
  {
    whiteSpace :"pre-line",
    display : 'block',
     
  }
}
/>

  
 
    </div>

</div>
     


     <div className='servicesNavbar'>
     
     <ul>
     
     <Link to={"/"} className='links'>  Home</Link> 
      
       <Link to={"/about us"}  className='links'>About Us</Link> 
    <Link to={"/services"}  className='links'>services  </Link> 
        <Link to={"/carrer"}  className='links'>Careers </Link> 
       <Link to ={"/coupans"}  className='links'>coupans</Link> 
      <Link to ={"/conatct us"}  className='links'>contact us </Link> 
       
     </ul>

     </div>
   
    
    
    </div>
  )
}

export default Navbar