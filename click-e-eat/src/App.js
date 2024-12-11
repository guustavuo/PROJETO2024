import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Restaurants from "./components/Restaurants";

function App() {
  return (
    <Router>
      <Routes>
        {/* Página de Login */}
        <Route path="/" element={<Login />} />

        {/* Página de Restaurantes */}
        <Route path="/Restaurants" element={<Restaurants />} />
      </Routes>
    </Router>
  );
}

export default App;
