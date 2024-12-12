import React from 'react';
import './Cardapio.css';

// Importando as imagens
import feijoadaImg from "../assets/images/feijoada.jpg";
import parmgianaavif from "../assets/images/parmgiana.avif";
import churrasgauchowebp from "../assets/images/churrasgaucho.webp";
import brasiljpg from "../assets/images/brasil.jpg";

import { Link } from "react-router-dom";

const Cardapio = () => {
    return (
        <div>
            {/* Cabeçalho */}
            <header>
                <div className="container">
                    <h1>Sabor & Arte</h1>
                    <nav>
                        <ul>
                            {/* <li><a href="/">Início</a></li> */}
                            <li><Link to="/">Início</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>

            {/* Seção do Banner */}
            <section className="banner">
                <img src={brasiljpg} alt="Restaurante Sabor & Arte" className="banner-img" />
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
                            <img src={feijoadaImg} alt="Feijoada" />
                            <h3>Feijoada</h3>
                            <p>Feijoada completa com arroz, couve e laranja.</p>
                            <span>R$ 49,90</span>
                            <button>Adicionar ao Carrinho</button>
                        </div>
                        <div className="menu-item">
                            <img src={parmgianaavif} alt="Frango à Parmegiana" />
                            <h3>Frango à Parmegiana</h3>
                            <p>Frango empanado com queijo derretido e molho de tomate.</p>
                            <span>R$ 39,90</span>
                            <button>Adicionar ao Carrinho</button>
                        </div>
                        <div className="menu-item">
                            <img src={churrasgauchowebp}alt="Churrasco Gaúcho" />
                            <h3>Churrasco Gaúcho</h3>
                            <p>Corte de carne assada na brasa, servido com farofa e vinagrete.</p>
                            <span>R$ 59,90</span>
                            <button>Adicionar ao Carrinho</button>
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
        </div>
    );
}

export default Cardapio;
