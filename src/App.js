import React, { useState } from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { CartProvider } from 'react-use-cart';

import { Navbar, Cart, Login, Home, ContactUs, AboutUs, Blog, FAQ, NoPage} from "./components";
import './assets/Styles/main.scss';
import { Gotop } from "./components";


function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} ></Route>
            <Route path="cart" element={<Cart />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="about-us" element={<AboutUs />}></Route>
            <Route path="contact-us" element={<ContactUs />}></Route>
            <Route path="blog" element={<Blog />}></Route>
            <Route path="FAQ" element={<FAQ />}></Route>
            <Route path="*" element={<NoPage />}></Route>
          </Route>
        </Routes>
        <Gotop />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
