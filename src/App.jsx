import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from './components/Home';
import Product from './components/Product';
import ProductDetail from './components/ProductDetail';
import ProductNotFound from "./components/ProductNotFound"

function App() {
  return (
    <div className='App'>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/products' element={<Product />}></Route>
          <Route path="/products/:id" element={<ProductDetail />}></Route>
          <Route path="*" element={<ProductNotFound />}></Route>
        </Routes>
    
     
       
        
    </div>
  );
}

export default App;
