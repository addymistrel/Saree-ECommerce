import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import ProductList from "../pages/ProductList/ProductList";
import Footer from "../components/Footer/Footer";
import MainNavbar from "../components/Navbar/MainNavbar";
import ProductDisplay from "../pages/ProductDisplay/ProductDisplay";

export default function AllRoutes() {
  return (
    <>
      <MainNavbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/productDisplay" element={<ProductDisplay />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}
