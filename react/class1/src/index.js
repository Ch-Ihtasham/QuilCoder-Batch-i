import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/navbar/Navbar';
import Hero from './components/heroSection/Hero'
import Fotter from './components/fotter/Fotter';
import Esha from './components/Esha'
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



