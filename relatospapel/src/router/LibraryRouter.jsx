import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Loading from '../views/Loading';
import {Header} from '../components/Header';
import NotFound from "../views/NotFound";
import {Landing} from "../views/Landing";
import {BookDetails} from "../views/BookDetail";
import {Books} from "../views/Books";
import {CheckoutBooks} from "../views/CheckoutBooks";
import {UserProfile} from "../views/UserProfile";
import NavBar from "../components/NavBar";


export const LibraryRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout><Loading /></Layout>} />
                <Route path="/Landing" element={<Layout><Landing /></Layout>} />
                <Route path="/Books" element={<Layout><Books /></Layout>} />
                <Route path="/Book/:bookId" element={<Layout><BookDetails /></Layout>} />
                <Route path="/CheckoutBooks" element={<Layout><CheckoutBooks /></Layout>} />
                <Route path="/UserProfile" element={<Layout><UserProfile /></Layout>} />
                <Route path="*" element={<Layout><NotFound /></Layout>} />
            </Routes>
        </Router>
    );
}
const Layout = ({children}) => (
    <div className="app-layout">
        <NavBar/>
        <div className="main-content">
            <Header />
            <div className="page-content">
            {children}
            </div>
        </div>
    </div>
);