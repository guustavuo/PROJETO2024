import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Importar os estilos

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username && password) {
      console.log("Usuário autenticado:", username);
      navigate("/restaurants"); // Redireciona para a página de restaurantes
    } else {
      alert("Por favor, preencha os campos de usuário e senha!");
    }
  };

  return (
    <div className="container">
      <h1 className="title">CLICK & EAT</h1>
      <p className="subtitle">A comida mais rápido na sua mesa</p>
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Usuário</label>
          <input
            type="text"
            id="username"
            placeholder="Digite seu usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Entrar</button>
        </form>
        <p className="forgot-password">Esqueceu sua senha? <a href="#">Clique aqui</a></p>
      </div>
    </div>
  );
};

export default Login;
