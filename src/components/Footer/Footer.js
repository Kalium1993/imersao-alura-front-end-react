import React from "react";
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="text">
                <span className="title">TESTAR PREMIUM DE GRAÇA</span>
                <span className="subtitle">Inscreva-se para curtir música ilimitada só com alguns anúncios. Não precisa de cartão de crédito.</span>
            </div>
            <button className="footer-button">
                <span>Inscreva-se grátis</span>
            </button>
        </footer>     
    );
};

export default Footer;