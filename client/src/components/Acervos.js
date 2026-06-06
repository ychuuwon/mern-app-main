import React from 'react';
import '../styles/home.css';

const Acervos = () => {
  return (
    <section className="acervos" id="acervos">
      <h2 className="acervos-title">ACERVOS</h2>
      <div className="acervos-container">
        <div className="acervo-card">
          <img src="https://via.placeholder.com/280x350?text=JOJO+RABBIT" alt="Jojo Rabbit" className="acervo-poster" />
          <h3>FILMES E ENCONTROS</h3>
          <p>Aqui você encontra todos os filmes já estudados pelo clube desde 2024.</p>
          <button className="btn-acessar">ACESSAR</button>
        </div>
        <div className="acervo-card">
          <img src="https://via.placeholder.com/280x350?text=CURTAMETRAGENS" alt="Curtametragens" className="acervo-poster" />
          <h3>CURTAMETRAGENS</h3>
          <p>Aqui você encontra os curtametragens produzidos pelos alunos do IFC - Campus Sombrio!</p>
          <button className="btn-acessar">ACESSAR</button>
        </div>
      </div>
    </section>
  );
};

export default Acervos;
