import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BookContext } from '../context/BookContext';
import '../styles/BookDetail.css';

export const BookDetails = () => {
    const { bookId } = useParams();
    const navigate = useNavigate();
    const { books,updateClicks } = useContext(BookContext);
    const book = books?.find(book => book.book_id === bookId);

    if (!book) {
        return (
            <div className="book-detail__not-found">
                <h2>Book not found</h2>
                <button 
                    className="book-detail__button"
                    onClick={() => navigate('/Books')} >
                    Return to Books
                </button>
            </div>
        );
    }
    return (
        <div className="book-detail">
            <div className="book-detail__container">
                <div className="book-detail__image-section">
                    <img 
                        src={book.image_url}
                        alt={book.name}
                        className="book-detail__image" />
                </div>
                <div className="book-detail__content">
                    <h1 className="book-detail__title">{book.name}</h1>
                    <p className="book-detail__author">by {book.author}</p>
                    <div className="book-detail__metadata">
                        <div className="book-detail__metadata-item">
                            <span className="book-detail__label">Published:</span>
                            <span className="book-detail__value">{book.published_date}</span>
                        </div>
                        <div className="book-detail__metadata-item">
                            <span className="book-detail__label">Genre:</span>
                            <span className="book-detail__value">{book.genre}</span>
                        </div>
                        <div className="book-detail__metadata-item">
                            <span className="book-detail__label">Book Code:</span>
                            <span className="book-detail__value">{book.book_id}</span>
                        </div>
                    </div>
                    <div className="book-detail__description">
                        <h3 className="book-detail__section-title">Description</h3>
                        <p>{book.description}</p>
                    </div>
                    <div className="book-detail__price-section">
                        <span className="book-detail__price">${book.price}</span>
                        <div className="book-detail__actions">
                            <button 
                                className="book-detail__button"
                                onClick={() => updateClicks()}>
                                {/*onClick={() => navigate("/CheckoutBooks")}>*/}
                                Add to Cart</button>
                            <button 
                                className="book-detail__button book-detail__button--secondary"
                                onClick={() => navigate("/Books")}>Back to Books</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}