import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Settings from './Pages/Settings';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Dashboard';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Products from './Pages/Products';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
