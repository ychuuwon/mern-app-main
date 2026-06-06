import React from 'react';
import '../styles/home.css';

const Contato = () => {
  return (
    <section className="contato" id="contato">
      <div className="contato-container">
        <div className="contato-text">
          <h2 className="contato-title">CONTATO</h2>
          <p>Entre em contato com os coordenadores do projeto em caso de dúvidas ou sugestões!</p>
        </div>
        <div className="contato-info">
          <p><strong>Email:</strong> popphilo@ifc.edu.br</p>
          <p><strong>Telefone:</strong> +55 (48) 9999-xxxx</p>
          <p><strong>Instagram:</strong> @popphilo_ifc</p>
        </div>
      </div>
    </section>
  );
};

export default Contato;
