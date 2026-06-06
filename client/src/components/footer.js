import React from "react";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer" id="contato">
      <div className="footer-container">
        <div className="footer-text">
          <h2 className="footer-title">CONTATO</h2>
          <p>Entre em contato com os coordenadores do projeto em caso de dúvidas ou sugestões!</p>
        </div>
        <div className="footer-info">
          <p><strong>Email:</strong> popphilo@ifc.edu.br</p>
          <p><strong>Telefone:</strong> +55 (67) 67676767</p>
          <p><strong>Instagram:</strong> @popphilo_ifc</p>
        </div>
      </div>
    </footer>
  );
}
