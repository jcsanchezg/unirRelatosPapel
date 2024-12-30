import React, {useContext} from 'react';
import '../styles/Landing.css';
import {BookContext} from "../context/BookContext";

export const Landing = () => {
    const {books} = useContext(BookContext);
    console.log(books)
    const featuredBook = books?.[2];
    const topSellingBook = books?.[1];

    return (
        <div>
            <h1 className="center__text">Noticias de Libros Destacados</h1>
            <div className="landing__grid">
                {/* News Column */}
                <div className="landing__column landing__column--news">
                    <h2 className="landing__subtitle">Últimas Noticias</h2>
                    {featuredBook && (
                        <div className="landing__news-card">
                            <img
                                src={featuredBook.image_url}
                                alt={featuredBook.name}
                                className="landing__news-image" />
                            <h3 className="landing__news-title">{featuredBook.name}</h3>
                            <p className="landing__news-author">por {featuredBook.author}</p>
                            <p className="landing__news-text">
                                ¡Nuevo lanzamiento! Descubre esta fascinante historia que está cautivando a lectores de
                                todo el mundo. </p>
                            <span className="landing__news-date">Publicado: {featuredBook.published_date}</span>
                        </div>
                    )}
                </div>

                {/* Top Selling Column */}
                <div className="landing__column landing__column--bestseller">
                    <h2 className="landing__subtitle">Más Vendido de la Semana</h2>
                    {topSellingBook && (
                        <div className="landing__bestseller-card">
                            <div className="landing__bestseller-badge">Top Ventas</div>
                            <img
                                src={topSellingBook.image_url}
                                alt={topSellingBook.name}
                                className="landing__bestseller-image"
                            />
                            <h3 className="landing__bestseller-title">{topSellingBook.name}</h3>
                            <p className="landing__bestseller-author">por {topSellingBook.author}</p>
                            <p className="landing__bestseller-price">${topSellingBook.price}</p>
                            <p className="landing__bestseller-description">
                                {topSellingBook.description}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}