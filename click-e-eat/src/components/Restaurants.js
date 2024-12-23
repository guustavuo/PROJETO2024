import React from "react";
import "./Restaurants.css";
import { useNavigate } from "react-router-dom";

// Importando as imagens
import feijoadaImg from "../assets/images/feijoada.jpg";
import italianaImg from "../assets/images/italina.jpg";
import portugalImg from "../assets/images/portugal.jfif";
import japaoImg from "../assets/images/japao.jpg";
import churrasImg from "../assets/images/churras.jfif";
import mediterraneoImg from "../assets/images/mediterraneo.jpg";
import gourmetImg from "../assets/images/gourmet.jfif";
import mexicoImg from "../assets/images/mexico.jpg";
import frutosdomarImg from "../assets/images/frutosdomar.jfif";
import francaImg from "../assets/images/franca.jfif";
import veganImg from "../assets/images/vegan.jpg";
import cafefrancaImg from "../assets/images/cafefranca.jpg";

const Header = () => {
  const navigate = useNavigate(); // Hook para redirecionar
  const handleLogout = () => {
    localStorage.removeItem("token"); // Remover o token
    navigate("/login"); // Redirecionar para a página de login
  };

  // Verificar se o token existe no localStorage
  const isLoggedIn = localStorage.getItem("token");

  return (
    <header>
      <div className="container">
        <h1>Click & Eat</h1>
        <nav>
          <ul>
            {isLoggedIn && (
              <li>
                <a href="#" onClick={handleLogout}>Logout</a>
              </li>
            )}
            {!isLoggedIn && (
              <>
                <li><a href="/login">Login</a></li>
                <li><a href="/cadastro">Cadastro</a></li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

// Componente Restaurants
const Restaurants = () => {
  const restaurantData = [
    {
      imgSrc: feijoadaImg,
      alt: "Restaurante Mexicano",
      title: "Sabor e Arte",
      description: "Aconchegante, com um toque artístico, ideal para jantares e festas.",
      link: "/cardapio"
    },
    {
      imgSrc: italianaImg,
      alt: "Bella Tavola",
      title: "Bella Tavola",
      description: "Estilo clássico com toques de sofisticação, com vista para o mar.",
      link: "#"
    },
    {
      imgSrc: portugalImg,
      alt: "Cantina do Porto",
      title: "Cantina do Porto",
      description: "Aconchegante, com um toque artístico, ideal para jantares e festas.",
      link: "#"
    },
    {
      imgSrc: japaoImg,
      alt: "Oasis do Oriente",
      title: "Oasis do Oriente",
      description: "Moderno e minimalista, com decoração inspirada no Japão e Tailândia.",
      link: "#"
    },
    {
      imgSrc: churrasImg,
      alt: "Pão de Açúcar Grill",
      title: "Pão de Açúcar Grill",
      description: "Tacos, burritos e guacamole fresquinho.",
      link: "#"
    },
    {
      imgSrc: mediterraneoImg,
      alt: "Taverna do Vinho",
      title: "Taverna do Vinho",
      description: "Ambiente acolhedor e rústico, com uma extensa carta de vinhos.",
      link: "#"
    },
    {
      imgSrc: gourmetImg,
      alt: "Le Jardin Gourmand",
      title: "Le Jardin Gourmand",
      description: "Elegante e romântico, com jardins floridos ao redor.",
      link: "#"
    },
    {
      imgSrc: mexicoImg,
      alt: "La Casa del Taco",
      title: "La Casa del Taco",
      description: "Descontraído, com cores vibrantes e temática mexicana.",
      link: "#"
    },
    {
      imgSrc: frutosdomarImg,
      alt: "The Seafood Market",
      title: "The Seafood Market",
      description: "Casual e vibrante, com uma atmosfera de mercado de peixe.",
      link: "#"
    },
    {
      imgSrc: francaImg,
      alt: "Bistrô do Chef",
      title: "Bistrô do Chef",
      description: "Sofisticado e moderno, com uma atmosfera íntima e acolhedora.",
      link: "#"
    },
    {
      imgSrc: veganImg,
      alt: "Viva Veggie",
      title: "Viva Veggie",
      description: "Natural e saudável, com muitos elementos de madeira e plantas.",
      link: "#"
    },
    {
      imgSrc: cafefrancaImg,
      alt: "Café de Paris",
      title: "Café de Paris",
      description: "Charme parisiense, com decoração vintage e mesas ao ar livre.",
      link: "#"
    },
  ];

  return (
    <div>
      {/* Incluindo o Header no componente Restaurants */}
      <Header />
      
      <div className="restaurant-container">
        {restaurantData.map((restaurant, index) => (
          <div className="restaurant-card" key={index}>
            <img src={restaurant.imgSrc} alt={restaurant.alt} />
            <h2>{restaurant.title}</h2>
            <p>{restaurant.description}</p>
            <a href={restaurant.link}>
              <button>Ver Menu</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Restaurants;
