import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Caregivers from './pages/Caregivers';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import FAQs from './pages/FAQs';
import Resources from './pages/Resources';
import ClientPortal from './pages/ClientPortal';
import ChatWidget from './components/ChatWidget';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/caregivers" element={<Caregivers />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/client-portal" element={<ClientPortal />} />
        </Routes>
        <Footer />
        <ChatWidget />
      </div>
    </Router>
  );
}

export default App;
