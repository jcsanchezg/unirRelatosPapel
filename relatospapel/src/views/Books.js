import React,{useContext} from 'react';
import '../styles/Book.css';
import '../styles/App.css';
import {useNavigate} from "react-router";
import {Book} from "../components/Book";
import {BookContext} from "../context/BookContext";

export const Books = () => {
    const navigate = useNavigate();
    const {books} = useContext(BookContext);

    return (
        <div className="books-container">
            {books.map((books,index) =>(
                <Book
                    key={index}
                    book_id={books.book_id}
                    name={books.name}
                    author={books.author}
                    // published_date={books.published_date}
                    // genre={books.genre}
                    // description={books.description}
                    image_url={books.image_url}
                    price={books.price}
                />
            ))}
            <button onClick={() => navigate("/Landing")}>Ir a Home</button>
        </div>
    );
}