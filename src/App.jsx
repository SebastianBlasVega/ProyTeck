import React from 'react';
import { Routes,Route } from 'react-router-dom';
//Componentes
import Header from './components/Header.jsx';
import Navbar from './components/navbar.jsx';
import Banner from './components/Banner.jsx';
import Productos from './components/Productos.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Banner />
      <Productos />
      <Footer />
    </>  
  );
}

export default App
