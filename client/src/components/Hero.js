import React from 'react';
import '../styles/home.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">PORTAL<br />CINELOSOFIA</h1>
          <p className="hero-subtitle">Clube de Cinema e Filosofia<br />do IFC - Campus Sombrio</p>
        </div>
        <div className="hero-image">
          <img src="https://via.placeholder.com/350x300?text=Grupo+Cinelosofia" alt="Grupo Cinelosofia" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
