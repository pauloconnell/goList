import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import Home from "./pages/Home";
//import About from "./pages/About";


function App() {
    console.log("App component is rendering!");
//     console.log("Resolved paths:");
// console.log("Root Directory:", path.resolve(__dirname, 'frontend'));
// console.log("Public Directory:", path.resolve(__dirname, 'frontend/public'));
// console.log("Output Directory:", path.resolve(__dirname, 'dist'));
// console.log("Entry Point:", path.resolve(__dirname, 'frontend/public/index.html'));

  return (
    <>
    {/* <Router> 
      <Routes> 
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} /> 
        <Route path="/contact" element={<Contact />} /> 
      </Routes> 
    </Router> */}
    <div>
      <h1>Hello, World!</h1>
      <p>Welcome to your React app powered by Vite!</p>
    </div>
    </>
  );
}

export default App;
