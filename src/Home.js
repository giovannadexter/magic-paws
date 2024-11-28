
import React from "react";
import "./Home.css";
import Product from "./Product";
import banner from "./imgs/banner.jpg";
import Oliver from "./imgs/Oliver.jpeg"; 
import Dexter from "./imgs/Dexter.jpeg"; 
import Donald from "./imgs/Donald.jpeg";  
import plinioludmilo from "./imgs/plinioludmilo.jpg";  
import sonsa from "./imgs/sonsa.jpeg";



function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src={banner}
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="Oliver, o Corgizinho Mais Lindo do Brasil, Macho, Pelagem Branca e Vermelha, Quatro Meses."
            price={9500.99}
            rating={5}
            image={Oliver}
          />
          <Product
            id="49538094"
            title="Dexter, o Pequinês Mais Fofo do Planeta Terra, Macho, Pelagem Preta/Cinza, Treze Anos."
            price={40000.99}
            rating={5}
            image={Dexter}
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Donald, o Micro Poodle Mais Cego de Cianorte, Macho, Pelagem Cinza, Quatorze Anos. Brinde Exclusivo: Calopsita"
            price={8900.99}
            rating={5}
            image={Donald}
          />
          <Product
            id="23445930"
            title="Plinio, Padeiro Profissional - Amassador de Pãozinho, Pelagem Branca. Brinde: Ludmilo, Gatinho Frajola"
            price={8999.99}
            rating={5}
            image={plinioludmilo}
          />
          <Product
            id="3254354345"
            title="Sonsa, a cachorrinha mais carente de Rolândia, SRD, Pelagem Caramelo, Dois anos."
            price={8500.00}
            rating={5}
            image={sonsa}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
