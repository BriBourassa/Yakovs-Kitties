import React from 'react';
import './App.css';
import Navbar from '../Navbar/Navbar.jsx';
import Home from '../Home/Home.jsx';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Navbar />
      <div className="App">
        
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>

          {/* <Routes>
          <Route exact path="/adopt" element={<Adoptions />} />
        </Routes>

        <Routes>
          <Route exact path="/about-us" element={<About />} />
        </Routes> */}
       
      </div>
    </>
  );
};

export default App;
