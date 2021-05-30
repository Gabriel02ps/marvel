import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import './App.css';
import Contact from './Components/Contact';
import Hero from './Components/Hero';
import Heroes from './Components/Heroes';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Heroes />} />
            <Route path="hero/:id" element={<Hero />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
