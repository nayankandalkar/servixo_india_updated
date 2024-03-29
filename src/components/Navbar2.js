// import React, { useState } from 'react';
// import './Navbar3.css';

// const Navbar2 = () => {
//     const [sidebarVisible, setSidebarVisible] = useState(false);

//     const showSidebar = () => {
//         setSidebarVisible(true);
//     };

//     const hideSidebar = () => {
//         setSidebarVisible(false);
//     };

//     return (
//         <div>
//             <nav>
//                 <ul className={sidebarVisible ? "sidebar visible" : "sidebar"} id='a'>
//                     <li onClick={hideSidebar}><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 96 960 960" width="26"><path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/></svg></a></li>
//                     <li><a href="#">Blog123</a></li>
//                     <li><a href="#">Products</a></li>
//                     <li><a href="#">About</a></li>
//                     <li><a href="#">Forum</a></li>
//                     <li><a href="#">Login</a></li>
//                 </ul>
//                 <ul>
//                     <li><a href="#">Coding2go</a></li>
//                     <li className="hideOnMobile"><a>Blog</a></li>
//                     <li className="hideOnMobile"><a>Products</a></li>
//                     <li className="hideOnMobile"><a>About</a></li>
//                     <li className="hideOnMobile"><a>Forum</a></li>
//                     <li className="hideOnMobile"><a>Login</a></li>
//                     <li className="menu-button" onClick={showSidebar}><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 96 960 960" width="26"><path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/></svg></a></li>
//                 </ul>
//             </nav>
//         </div>
//     );
// }

// export default Navbar2;



import React, { useState } from 'react';
import './Navbar3.css';
import img1 from '../ascets/logo.png'
import { CiSearch } from "react-icons/ci";
import { TypeAnimation } from 'react-type-animation';
import { FaLocationDot } from "react-icons/fa6";


const Navbar2 = () => {
    const [sidebarVisible, setSidebarVisible] = useState(false);

    const showSidebar = () => {
        setSidebarVisible(true);
    };

    const hideSidebar = () => {
        setSidebarVisible(false);
    };

    return (
        <div>
            <nav>
                <ul className={sidebarVisible ? "sidebar visible" : "sidebar hidden"} id='a'>
                    <li onClick={hideSidebar}><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 96 960 960" width="26"><path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/></svg></a></li>
                    <li><a href="#" onClick={hideSidebar}>home</a></li>
                    <li><a href="#" onClick={hideSidebar}>About  Us</a></li>
                    <li><a href="#" onClick={hideSidebar}>Services</a></li>
                     
                    <li><a href="#"  onClick={hideSidebar}>Contact Us</a></li>
                </ul>
                <ul className={sidebarVisible ? "tabs hidden" : "tabs"}>
                    
                    <li><a href="#">  <img src={img1} width={"40px"} className='image'></img></a></li>
                    <li id='search'><div   className='box-location'  >
                                      
                                      <input type='text' placeholder='search-here... ' className='input-search'></input>

                                                    </div>
     </li>
                    <li className="hideOnMobile"  ><a href='/contact us'>  Home </a></li>
                    <li className="hideOnMobile"><a>About us</a></li>
                    <li className="hideOnMobile"><a>Services</a></li>
                   
                    <li className="hideOnMobile"><a>Contact Us</a></li>
                    <li className="menu-button" onClick={showSidebar}><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 96 960 960" width="26"><path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/></svg></a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar2;

