import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/global.css';
import Home from './pages/homePage/Home';
import About from './pages/aboutPage/About';
import ContactForm from './components/ContactForm';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactForm />} />
          {/* Add more routes for other pages */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;




