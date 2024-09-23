import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './views/Landing';
import Login from './views/Auth/Login';
import Register from './views/Auth/Register';
import AboutUs from './views/About';
import Products from './views/Products';
import Blog from './views/Blog';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
	</BrowserRouter>
  );
}

export default App;
