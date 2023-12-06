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
import Contact from "./App/contact.jsx";
import About from "./App/about.jsx";
// import Gallery from "./App/gallery.jsx";
import Footer from "./App/footer.jsx";
import Mainpage from "./App/mainpage.jsx";


function App() {

  return (
    <HashRouter>
        <Header/>
           <Routes>
            <Route path="/" element={<Mainpage/>}/>
               <Route path='/mainpage' element={<Mainpage/>}/>
               <Route path='/contact' element={<Contact/>}/>
               <Route path='/about' element={<About/>}/>
               {/*<Route path='/gallery' element={<Gallery/>}/>*/}


            </Routes>
        <Footer/>
    </HashRouter>
  )
}

export default App
