import { useState } from 'react';
import './App.css';
import { Header } from './Common/Header';
import Footer from './Common/Footer';
import Home from './Componets/Home';
import Services from './Componets/Services';
import Customers from './Componets/Customers';
import AboutUs from './Componets/AboutUs';
import Careers from './Componets/Careers';
import BlogPage from './Componets/BlogPage';
import RequestQuote from './Componets/RequestQuote';
import Gallery from './Componets/Gallery';


import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ContactUs from './Componets/ContactUs';
import Hero from './Componets/Hero';
import KeyProjects from './Componets/KeyProjects/KeyProjects';
import Projects from './Componets/Projects';

function App() {
  return (
    <Router>
      <Header />

      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Hero />} />


        <Route path="/services" element={<Services />} />
        <Route path="/keyprojcts" element={<KeyProjects />} />
        <Route path="/projcts" element={<Projects />} />


        <Route path="/customers" element={<Customers />} />
        <Route path="/BlogPage" element={<BlogPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/Contact" element={<ContactUs />} />
        <Route path="/Quote" element={ <RequestQuote />} />      
        <Route path="/gallery" element={ <Gallery />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
