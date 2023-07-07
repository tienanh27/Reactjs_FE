import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/' element={<Home />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
