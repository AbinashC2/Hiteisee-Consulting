import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
import ContactUs from './Componets/ContactUs';
import KeyProjects from './Componets/KeyProjects/KeyProjects';
import Projects from './Componets/Projects';

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/keyprojcts" element={<KeyProjects />} />
        <Route path="/projcts" element={<Projects />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/blogpage" element={<BlogPage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/quote" element={<RequestQuote />} />      
        <Route path="/gallery" element={<Gallery />} /> 
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
