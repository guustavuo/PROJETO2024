import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Restaurants from "./components/Restaurants";
import Cadastro from "./components/Cadastro";

function App() {
  return (
    <Router>
      <Routes>
        {/* Página de Login */}
        <Route path="/login" element={<Login />} />

        {/* Página de Cadastro */}
        <Route path="/cadastro" element={<Cadastro />} />


        {/* Página de Restaurantes */}
        <Route path="/" element={<Restaurants />} />
      </Routes>
    </Router>
  );
}

export default App;
