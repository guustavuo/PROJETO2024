import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Importar os estilos

const Login = () => {
  const [email, setEmail] = useState("");  // Alterei para 'email'
  const [senha, setSenha] = useState("");  // Alterei para 'senha'
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email && senha) {
      try {
        // Enviar dados de login para o backend
        const response = await fetch("http://localhost:3000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            senha: senha,
          }),
        });

        const data = await response.json();

        if (response.ok) {
          // Salvar o token no localStorage
          localStorage.setItem("token", data.token);
          console.log("Usuário autenticado:", email);
          navigate("/"); // Redireciona para a página de restaurantes
        } else {
          alert(data.error || "Erro ao realizar login.");
        }
      } catch (error) {
        console.error("Erro ao tentar realizar login:", error);
        alert("Erro ao tentar realizar login.");
      }
    } else {
      alert("Por favor, preencha os campos de email e senha!");
    }
  };

  return (
    <div className="login-container">
      <h1 className="title">CLICK & EAT</h1>
      <p className="subtitle">A comida mais rápido na sua mesa</p>
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label> {/* Alterado de 'username' para 'email' */}
          <input
            type="email"  // Tipo alterado para 'email'
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
          <button type="submit">Entrar</button>
        </form>
        <p className="forgot-password">Esqueceu sua senha? <a href="#">Clique aqui</a></p>
      </div>
    </div>
  );
};

export default Login;
