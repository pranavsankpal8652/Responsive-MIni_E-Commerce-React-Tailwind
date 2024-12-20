import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import React from "react";
    
import { TextPlugin } from "gsap/TextPlugin";

import Home from './Components/Home'
import Category_filters from './Components/Category_filters'

import { BrowserRouter, Route, Routes } from 'react-router';
import Rootlayout from './Components/Rootlayout';
import Product_details from './Components/Product_details';
import Context from './Components/Context';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <BrowserRouter>

    <Context>
    <Routes>
      <Route element={<Rootlayout/>}>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/products' element={<Category_filters/>}></Route>
        <Route path='/product_details/:id' element={<Product_details/>}></Route>
      </Route>

    </Routes>
    </Context>
    


    </BrowserRouter>
  </StrictMode>,
)
