import React, { useState } from 'react';
import '../styles/UserProfile.css';

export const UserProfile = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [userInfo, setUserInfo] = useState({
        firstName: 'Camilo',
        lastName: 'Sanchez',
        email: 'Camilo_sanchez@relatosdepapel.com',
        paymentMethod: 'Visa ending in 1242',
        previousBooks: [
            {
                id: '1',
                title: 'The Great Gatsby',
                author: 'F. Scott Fitzgerald',
                rating: 4
            },
            {
                id: '2',
                title: '1984',
                author: 'George Orwell',
                rating: 5
            },
            {
                id: '3',
                title: 'Pride and Prejudice',
                author: 'Jane Austen',
                rating: 4
            }
        ],
        avatar: '/logo.svg'
    });

    const [editForm, setEditForm] = useState({ ...userInfo });

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleCancel = () => {
        setEditForm({ ...userInfo });
        setIsEditing(false);
    };

    const handleSave = () => {
        setUserInfo({ ...editForm });
        setIsEditing(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditForm(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleRatingChange = (bookId, newRating) => {
        setEditForm(prev => ({
            ...prev,
            previousBooks: prev.previousBooks.map(book => 
                book.id === bookId ? { ...book, rating: parseInt(newRating) } : book
            )
        }));
    };

    const renderRating = (rating, bookId = null) => {
        return isEditing ? (
            <select
                className="user-profile__rating-select"
                value={rating}
                onChange={(e) => handleRatingChange(bookId, e.target.value)}
                disabled={!isEditing}
            >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        ) : (
            <span className="user-profile__rating-number">{rating}/5</span>
        );
    };

    return (
        <div className="user-profile">
            <div className="user-profile__header">
                <img 
                    src={userInfo.avatar} 
                    alt="Profile" 
                    className="user-profile__avatar"
                />
                <h1 className="user-profile__title">
                    {userInfo.firstName} {userInfo.lastName}'s Profile
                </h1>
            </div>

            <div className="user-profile__content">
                <div className="user-profile__section">
                    <h2 className="user-profile__section-title">Personal Information</h2>
                    {isEditing ? (
                        <div className="user-profile__form">
                            <div className="user-profile__form-group">
                                <label className="user-profile__label">First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={editForm.firstName}
                                    onChange={handleChange}
                                    className="user-profile__input"
                                />
                            </div>
                            <div className="user-profile__form-group">
                                <label className="user-profile__label">Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={editForm.lastName}
                                    onChange={handleChange}
                                    className="user-profile__input"
                                />
                            </div>
                            <div className="user-profile__form-group">
                                <label className="user-profile__label">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={editForm.email}
                                    onChange={handleChange}
                                    className="user-profile__input"
                                />
                            </div>
                            <div className="user-profile__form-group">
                                <label className="user-profile__label">Payment Method</label>
                                <input
                                    type="text"
                                    name="paymentMethod"
                                    value={editForm.paymentMethod}
                                    onChange={handleChange}
                                    className="user-profile__input"
                                />
                            </div>
                        </div>
                    ) : (
                        <div className="user-profile__info">
                            <div className="user-profile__info-group">
                                <span className="user-profile__label">First Name:</span>
                                <span className="user-profile__value">{userInfo.firstName}</span>
                            </div>
                            <div className="user-profile__info-group">
                                <span className="user-profile__label">Last Name:</span>
                                <span className="user-profile__value">{userInfo.lastName}</span>
                            </div>
                            <div className="user-profile__info-group">
                                <span className="user-profile__label">Email:</span>
                                <span className="user-profile__value">{userInfo.email}</span>
                            </div>
                            <div className="user-profile__info-group">
                                <span className="user-profile__label">Payment Method:</span>
                                <span className="user-profile__value">{userInfo.paymentMethod}</span>
                            </div>
                        </div>
                    )}
                </div>

                <div className="user-profile__section">
                    <h2 className="user-profile__section-title">Previously Read Books</h2>
                    <div className="user-profile__books">
                        {(isEditing ? editForm.previousBooks : userInfo.previousBooks).map(book => (
                            <div key={book.id} className="user-profile__book-item">
                                <div className="user-profile__book-info">
                                    <h3 className="user-profile__book-title">{book.title}</h3>
                                    <p className="user-profile__book-author">by {book.author}</p>
                                    <p className="user-profile__book-date">Read on: {book.dateRead}</p>
                                </div>
                                <div className="user-profile__book-rating">
                                    <span className="user-profile__label">Rating:</span>
                                    {renderRating(book.rating, book.id)}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="user-profile__actions">
                    {isEditing ? (
                        <>
                            <button 
                                className="user-profile__button user-profile__button--primary"
                                onClick={handleSave}
                            >
                                Save Changes
                            </button>
                            <button 
                                className="user-profile__button user-profile__button--secondary"
                                onClick={handleCancel}
                            >
                                Cancel
                            </button>
                        </>
                    ) : (
                        <button 
                            className="user-profile__button user-profile__button--primary"
                            onClick={handleEdit}
                        >
                            Edit Profile
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
//todo complete this