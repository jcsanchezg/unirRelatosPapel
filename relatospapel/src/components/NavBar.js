import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";
import {BookContext} from "../context/BookContext";

export default function NavBar() {
    const {buyClicks} = React.useContext(BookContext);
    return (
        <nav className="nav-bar">
            <ul className="nav-bar__menu">
                <li className="nav-bar__item">
                    <Link to="/" className="nav-bar__link">Home</Link>
                </li>
                <li className="nav-bar__item">
                    <Link to="/books" className="nav-bar__link">Books</Link>
                </li>
                <li className="nav-bar__item">
                    <Link to="/checkoutbooks" className="nav-bar__link">Checkout {buyClicks} items</Link>
                </li>
                <li className="nav-bar__item">
                    <Link to="/userprofile" className="nav-bar__link">User Profile</Link>
                </li>
            </ul>
        </nav>
    );
}