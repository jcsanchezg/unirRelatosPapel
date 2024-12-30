import React from 'react';
import '../styles/Book.css';
import {useNavigate} from "react-router";
import {BookContext} from "../context/BookContext";

export const Book = ({name, book_id, author, published_date, genre, description, image_url, price}) => {
    const navigate = useNavigate();
    const {updateClicks} = React.useContext(BookContext);
    const addToCart = () => {
        const cartItems = JSON.parse(localStorage.getItem('bookCart') || '[]');
        const existingItem = cartItems.find(item => item.book_id === book_id);
        
        if (existingItem) {
            existingItem.quantity += 1;
            localStorage.setItem('bookCart', JSON.stringify(cartItems));
        } else {
            const newItem = {
                book_id,
                name,
                author,
                price,
                image_url,
                quantity: 1
            };
            cartItems.push(newItem);
            localStorage.setItem('bookCart', JSON.stringify(cartItems));
        }
        
        navigate("/CheckoutBooks");
    };

    return (
        <div className="book-card">
            <img 
                src={image_url || 'https://via.placeholder.com/120x180?text=No+Image'} 
                alt={name}
                className="book-card__image"
            />
            <div className="book-card__content">
                <h3 className="book-card__title">{name}</h3>
                <p className="book-card__author">by {author}</p>
                <div className="book-card__metadata">
                    <span className="book-card__metadata-item">Published: {published_date}</span>
                    <span className="book-card__metadata-item">Genre: {genre}</span>
                </div>
                <p className="book-card__description">{description}</p>
                <p className="book-card__price">${price}</p>
                <p className="book-card__code">Book Code: {book_id}</p>
                <div className="book-card__actions">
                    <button 
                        className="book-card__button book-card__button--secondary" 
                        onClick={() => navigate(`/Book/${book_id}`)}>View Details</button>
                    <button
                        className="book-card__button"
                        onClick={() => {updateClicks();addToCart()}}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
}