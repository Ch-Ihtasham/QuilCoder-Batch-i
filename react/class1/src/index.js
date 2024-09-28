import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/navbar/Navbar';
import Hero from './components/heroSection/hero'
import Fotter from './components/fotter/fotter';
import Esha from './components/esha'
import './index.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Navbar />
    <Hero />
    <Fotter/>
    <Esha/>
  </div>
);



