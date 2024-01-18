
import React from "react";
import  Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { Homepage } from './pages/Homepage';





function App() {
  return (
    <BrowserRouter>
      <Routes>
      
        <Route exact path='/' element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route path='/Homepage' element={<Homepage />} />
        
       
        
      </Routes>
    </BrowserRouter>

  );
}

export default App;
