import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './Pages/About';
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
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
