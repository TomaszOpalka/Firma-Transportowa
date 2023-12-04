import React, { useState } from 'react'
import './App.scss'
import { createRoot } from 'react-dom/client';
import {
    HashRouter,
    Route,
    Routes,
    Link,
    NavLink,
    Outlet
} from 'react-router-dom';
import Header from  "./App/header.jsx";
import Form from "./App/form.jsx";
import Contact from "./App/contact.jsx";
import About from "./App/about.jsx";
import Gallery from "./App/gallery.jsx";
import Footer from "./App/footer.jsx";


function App() {

  return (
    <HashRouter>
        <Header/>
           <Routes>
            <Route path="/" element={<Form/>}/>
               <Route path='/form' element={<Form/>}/>
               <Route path='/contact' element={<Contact/>}/>
               <Route path='/about' element={<About/>}/>
               <Route path='/gallery' element={<Gallery/>}/>


            </Routes>
        <Footer/>
    </HashRouter>
  )
}

export default App
