 import React from 'react'
 import './footer.css'
 import { FaTwitter } from "react-icons/fa";
 import { FaFacebookF } from "react-icons/fa";
 import { FaInstagramSquare } from "react-icons/fa";
 import { FaLinkedin } from "react-icons/fa6";

 const Footer = () => {
   return (
     <div className='footer'>



        <div className='footer-content'>
            <h1>Company</h1>
          <a href=''>  About us </a> 
       <a href='/Terms-and-Conditions'>   Terms & conditions </a>
       <a href='/privacy-policy'> Privacy policy </a>
       <a href='/Cancellation-Refund-Policy'> Cancellation & Refund Policy </a>
       <a href=''>   UC impact </a>
       <a href=''>  Careers </a>
        </div>


        <div className='footer-content'>
            <h1>For customers</h1>

          <a href=''>   UC reviews </a>
          <a href=''> Categories near you </a>
          <a href=''> Blog </a>
          <a href='/Contact-us'> Contact us </a>

        </div>


        <div className='footer-content'>
            <h1>For partners</h1>
            <a href=''>Register as a professional</a>
        </div>




<div>
  <h1>Social links</h1>
  
  <div className="logos">

  <FaTwitter></FaTwitter>
   <FaFacebookF></FaFacebookF>
   <FaInstagramSquare></FaInstagramSquare>
   <FaLinkedin></FaLinkedin>

  </div>
    
</div>

     </div>
   )
 }
 
 export default Footer