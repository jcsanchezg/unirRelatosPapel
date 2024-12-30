import React from 'react';
import '../styles/Header.css';

export const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                <h1 className="header__title">
                    <span className="header__title-main">Biblioteca</span>
                    <span className="header__title-sub">Relatos de Papel</span>
                </h1>
            </div>
        </header>
    )
}

//todo find a style for this