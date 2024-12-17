import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Service from "./pages/Service/Service";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for Home Page */}
        <Route path="/" element={<Home />} />
        {/* Route for Service Page */}
        <Route path="/services" element={<Service />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
