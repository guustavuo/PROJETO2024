import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Restaurants from "./components/Restaurants";
import Cadastro from "./components/Cadastro";
import Cardapio from "./components/Cardapio";

function App() {
  return (
    <Router>
      <Routes>
        {/* Página de Login */}
        <Route path="/login" element={<Login />} />

        {/* Página de Cadastro */}
        <Route path="/cadastro" element={<Cadastro />} />

        {/* Página de Cardapio */}
        <Route path="/cardapio" element={<Cardapio />} />


        {/* Página de Restaurantes */}
        <Route path="/" element={<Restaurants />} />
      </Routes>
    </Router>
  );
}

export default App;
