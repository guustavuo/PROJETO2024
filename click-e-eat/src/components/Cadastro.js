import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Importar os estilos

const Cadastro = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (nome && email && senha) {
      const userData = { nome, email, senha };

      try {
        const response = await fetch("http://localhost:3000/usuarios", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        });

        if (response.ok) {
          console.log("Usuário cadastrado:", nome);
          navigate("/login"); // Redireciona para a página de login após o cadastro
        } else {
          alert("Erro ao cadastrar o usuário. Tente novamente.");
        }
      } catch (error) {
        console.error("Erro de rede:", error);
        alert("Erro ao se conectar ao servidor.");
      }
    } else {
      alert("Por favor, preencha todos os campos!");
    }
  };

  return (
    <div className="login-container">
      <h1 className="title">CLICK & EAT</h1>
      <p className="subtitle">A comida mais rápido na sua mesa</p>
      <div className="login-box">
        <h2>Cadastro</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            placeholder="Digite seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            id="senha"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
};

export default Cadastro;
