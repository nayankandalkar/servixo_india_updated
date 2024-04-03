import logo from './logo.svg';
import './App.css';
import Slider2 from './components/Slider2';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import TermsAndConditionsFunction from './components/PrivacyPolicy/TermsAndCondition';
import CancellationRefundPolicyFunction from './components/PrivacyPolicy/Cancellation-Refund-Policy';
import ContactUsFunction from './components/PrivacyPolicy/ContactUs';
 
  

function App() {
 

  return (
    
    <div className="App">
        <Routes>
        <Route path='/' element={  <Home></Home> } />
        <Route path='/privacy-policy' element={<PrivacyPolicy></PrivacyPolicy>}></Route>
        <Route path='/Terms-and-Conditions' element={<TermsAndConditionsFunction></TermsAndConditionsFunction>}></Route>
        <Route path='/Cancellation-Refund-Policy' element={<CancellationRefundPolicyFunction></CancellationRefundPolicyFunction>}></Route>
        <Route path='/Contact-us' element ={<ContactUsFunction></ContactUsFunction>}></Route>
      </Routes>
{/*     
     <Home></Home> */}
  
    </div>
  );
}

export default App;
