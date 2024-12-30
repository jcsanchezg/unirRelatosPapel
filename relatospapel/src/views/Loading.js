import React from 'react';
import {Link} from 'react-router-dom';
import useRedirection from '../hooks/useRedirection';

function Loading() {
    useRedirection("/landing",5000); //move to landing

    return (
        <div className="loading">
            <Link to={"/landing"}>{}
                <h1>...Biblioteca Relatos de Papel...</h1>
            </Link>
            <span className="book-loading"></span> //TODO search a book opening
        </div>
    );
}
export default Loading;