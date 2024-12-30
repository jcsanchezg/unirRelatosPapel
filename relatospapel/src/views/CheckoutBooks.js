import React, { useContext, useState } from 'react';
import { BookContext } from '../context/BookContext';
import '../styles/CheckoutBooks.css';

export const CheckoutBooks = () => {
    const { books,resetClicks } = useContext(BookContext);
    // For demo purposes - normally this would come from a cart context
    const [cartItems, setCartItems] = useState([
        { book_id: "1", quantity: 1 },
        { book_id: "2", quantity: 1 }
    ]);

    const getBook = (bookId) => {
        return books?.find(book => book.book_id === bookId);
    };

    const removeItem = (bookId) => {
        setCartItems(items => items.filter(item => item.book_id !== bookId));
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => {
            const book = getBook(item.book_id);
            return total + (book?.price || 0);
        }, 0);
    };
    const handleClearCheckout = () => {
        setCartItems([]);
        resetClicks();
    }

    return (
        <div className="checkout">
            <h1 className="checkout__title">Your Cart</h1>
            <div className="checkout__items">
                {cartItems.map(item => {
                    const book = getBook(item.book_id);
                    if (!book) return null;

                    return (
                        <div key={item.book_id} className="checkout__item">
                            <img
                                src={book.image_url}
                                alt={book.name}
                                className="checkout__item-image"
                            />
                            <div className="checkout__item-info">
                                <h3>{book.name}</h3>
                                <p>by {book.author}</p>
                                <p className="checkout__item-price">${book.price}</p>
                                <button
                                    onClick={() => removeItem(item.book_id)}
                                    className="checkout__remove-btn"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="checkout__summary">
                <div className="checkout__total">
                    <span>Total:</span>
                    <span>${calculateTotal().toFixed(2)}</span>
                </div>
                <div className="checkout__buttons">
                    <button
                        className="checkout__btn checkout__btn--primary"
                        onClick={() => alert('Processing payment...')}>
                        Pay Now
                    </button>
                    <button
                        className="checkout__btn checkout__btn--secondary"
                        onClick={handleClearCheckout}>
                        Clear Cart
                    </button>
                </div>
            </div>
        </div>
    );
};