import './App.css';
import React from 'react'
import "./components/FontAwesomeIcons"
import Register from './routes/Register';

import { Route, Routes } from "react-router-dom";
function App() {
  return (
   <>
    <Routes>
   <Route path="/" element={<Register/>}/>
   </Routes>
    </>
  );
}


export default App;