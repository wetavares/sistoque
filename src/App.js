import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Heder';
import Routes from "./routes";



export default function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes />
      <Footer />
    </BrowserRouter>
  );
}
