import React, { useState } from 'react';
import './ita.css';

function App() {
  const [mensagemCarrinho, setMensagemCarrinho] = useState('');

  const adicionarAoCarrinho = (nomePrato) => {
    setMensagemCarrinho(`${nomePrato} foi adicionado ao carrinho!`);

    setTimeout(() => {
      setMensagemCarrinho('');
    }, 2000); // A mensagem desaparecerá após 2 segundos
  };

  return (
    <div>
      {/* Cabeçalho */}
      <header>
        <div className="container">
          <h1>Sabor & Arte</h1>
          <nav>
            <ul>
              <li><a href="http://127.0.0.1:5500/inicio/index.html">Início</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Seção do Banner */}
      <section className="banner">
        <img src="/images/brasil.jpg" alt="Restaurante Sabor & Arte" className="banner-img" />
        <div className="banner-text">
          <h2>Bem-vindo ao Sabor & Arte!</h2>
          <p>Experimente o melhor da culinária brasileira em um ambiente aconchegante.</p>
        </div>
      </section>

      {/* Seção de Menu */}
      <section className="menu">
        <div className="container">
          <h2>Nossos Pratos</h2>
          <div className="menu-items">
            <div className="menu-item">
              <img src="/images/feijoada.jpg" alt="Feijoada" />
              <h3>Feijoada</h3>
              <p>Feijoada completa com arroz, couve e laranja.</p>
              <span>R$ 49,90</span>
              <button onClick={() => adicionarAoCarrinho('Feijoada')}>Adicionar ao Carrinho</button>
            </div>
            <div className="menu-item">
              <img src="/images/parmgiana.avif" alt="Frango à Parmegiana" />
              <h3>Frango à Parmegiana</h3>
              <p>Frango empanado com queijo derretido e molho de tomate.</p>
              <span>R$ 39,90</span>
              <button onClick={() => adicionarAoCarrinho('Frango à Parmegiana')}>Adicionar ao Carrinho</button>
            </div>
            <div className="menu-item">
              <img src="/images/churrasgaucho.webp" alt="Churrasco Gaúcho" />
              <h3>Churrasco Gaúcho</h3>
              <p>Corte de carne assada na brasa, servido com farofa e vinagrete.</p>
              <span>R$ 59,90</span>
              <button onClick={() => adicionarAoCarrinho('Churrasco Gaúcho')}>Adicionar ao Carrinho</button>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Informações Básicas */}
      <section className="informacoes">
        <div className="container">
          <h2>Informações</h2>
          <p><strong>Endereço:</strong> Rua da Gastronomia, 123 - Centro, São Paulo, SP</p>
          <p><strong>Telefone:</strong> (11) 1234-5678</p>
          <p><strong>Horário de Funcionamento:</strong> Seg-Sex: 11h - 22h | Sáb-Dom: 12h - 23h</p>
        </div>
      </section>

      {/* Rodapé */}
      <footer>
        <div className="container">
          <p>&copy; 2024 Restaurante Sabor & Arte. Todos os direitos reservados.</p>
        </div>
      </footer>

      {/* Mensagem de Carrinho */}
      {mensagemCarrinho && (
        <>
          <div className="overlay"></div>
          <div className="mensagem-carrinho">{mensagemCarrinho}</div>
        </>
      )}
    </div>
  );
}

export default App;
