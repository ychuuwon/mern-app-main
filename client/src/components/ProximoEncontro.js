import React from 'react';
import '../styles/home.css';

const ProximoEncontro = () => {
  return (
    <section className="proximo-encontro" id="proximo-encontro">
      <h2 className="proximo-encontro-title">PRÓXIMO ENCONTRO</h2>
      <div className="proximo-encontro-container">
        <div className="proximo-encontro-poster">
          <img src="https://via.placeholder.com/250x380?text=BUGONIA" alt="Poster Bugonia" />
          <button className="btn-participe">Saiba mais + PARTICIPE!</button>
        </div>
        <div className="proximo-encontro-info">
          <h3>BUGONIA</h3>
          <p>
            A história acompanha dois jovens conspiracionistas que sequestram a poderosa CEO de uma grande indústria farmacêutica, 
            convencidos de que ela é uma alienígena infiltrado com planos para destruir o planeta Terra
          </p>
          <div className="info-details">
            <p><strong>Data:</strong> 15/09</p>
            <p><strong>Hora:</strong> 15h</p>
            <p><strong>Local:</strong> Sala 25A - IFC Campus Sombrio</p>
            <p className="info-obs"><strong>OBS:</strong> Serão ofertados pipoca e café por conta do clube nessa sessão!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProximoEncontro;
