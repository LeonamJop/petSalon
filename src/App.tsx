import './global.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import  { Login }  from './Pages/Login';
import { Home } from './Pages/Home';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home/>}/>
        <Route path="*" element={<Navigate to="/login"/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
