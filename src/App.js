import logo from './logo.svg';
import './App.css';
import Slider2 from './components/Slider2';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
 
  

function App() {
 

  return (
    
    <div className="App">
        {/* <Routes>
        <Route path='/' element={  <Home></Home> } />
      </Routes>
     */}
     <Home></Home>
  
    </div>
  );
}

export default App;
