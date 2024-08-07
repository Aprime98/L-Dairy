import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
