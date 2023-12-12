import React from 'react'
import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sports from './Components/Sports.jsx';
import Home from './Components/Home.jsx'
import TV from './Components/TV.jsx'
import Search from './Components/Search.jsx'
import Sidemenu from './Components/Sidemenu.jsx'
import Movies from './Components/Movies.jsx'
import Myspace from './Components/Myspace';
export default function App() {
  
  return (
    <BrowserRouter>
          <Sidemenu/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/Myspace' element={<Myspace/>} />
        <Route path='/Sports' element={<Sports/>} />
        <Route path='/TV' element={<TV/>} />
        <Route path='/Movies' element={<Movies/>} />
        <Route path='/Search' element={<Search/>} />
        </Routes>
    </BrowserRouter>
  )
}
