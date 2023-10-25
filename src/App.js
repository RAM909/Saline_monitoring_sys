// import './App.css'
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Landing from './components/landing';
import HealthDashboard from './components/HealthDashboard';


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/Dash" element={<HealthDashboard/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;