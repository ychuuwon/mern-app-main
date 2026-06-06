import React from 'react';
import '../styles/home.css';

const QuemSomos = () => {
  return (
    <section className="quem-somos">
      <div className="quem-somos-container">
        <div className="quem-somos-images">
          <img src="https://via.placeholder.com/200x200?text=Encontro+1" alt="Encontro 1" className="quem-somos-img" />
          <img src="https://via.placeholder.com/200x200?text=Encontro+2" alt="Encontro 2" className="quem-somos-img" />
        </div>
        <div className="quem-somos-content">
          <h2 className="quem-somos-title">QUEM SOMOS?</h2>
          <p className="quem-somos-text">
            O clube <strong>Cinelosofia</strong> surgiu no ano de 2024, idealizado pelas estudantes <strong>Júlio Pellin</strong> e <strong>Vitória Behends</strong>. 
            Desde então, ocorre em encontros semanais que juntam sessões de filmes com discussões filosóficas sobre as obras vistas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default QuemSomos;
