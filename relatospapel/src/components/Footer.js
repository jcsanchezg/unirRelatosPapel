import React from 'react';
import '../styles/Footer.css';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__section">
                    <h3 className="footer__title">Relatos de Papel</h3>
                    <p>Compartiendo historias que cobran vida en cada página</p>
                </div>
                <div className="footer__section">
                    <h4 className="footer__subtitle">Contacto</h4>
                    <ul className="footer__list">
                        <li className="footer__list-item">Email: info@relatosdepapel.com</li>
                        <li className="footer__list-item">Tel: (123) 456-7890</li>
                        <li className="footer__list-item">Dirección: Calle Librería 123</li>
                    </ul>
                </div>
            </div>
            <div className="footer__bottom">
                <p className="footer__copyright">&copy; Relatos de Papel. Todos los derechos
                    reservados.</p>
            </div>
        </footer>
    );
}
//TODO search a icon