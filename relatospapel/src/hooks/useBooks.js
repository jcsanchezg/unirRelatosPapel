import {useEffect, useState} from "react";
import "../styles/Book.css";


export const useBooks = () =>{
    const [books, setBooks] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setBooks([
                {
                    book_id: "1",
                    name: "The Silent Patient",
                    author: "Alex Michaelides",
                    published_date: "2019-02-05",
                    genre: "Psychological Thriller",
                    description: "A woman shoots her husband five times and then never speaks again. A criminal psychotherapist becomes obsessed with uncovering her motive.",
                    image_url: "/images/book_thesilentpatient.png",
                    price: 24.99
                },
                {
                    book_id: "2",
                    name: "Sapiens: A Brief History of Humankind",
                    author: "Yuval Noah Harari",
                    published_date: "2014-02-10",
                    genre: "Non-fiction History",
                    description: "A groundbreaking narrative of humanity's creation and evolution that explores how biology and history have defined us.",
                    image_url: "/images/sapiens.png",
                    price: 29.99
                },
                {
                    book_id: "3",
                    name: "Dune",
                    author: "Frank Herbert",
                    published_date: "1965-08-01",
                    genre: "Science Fiction",
                    description: "Set in the distant future amidst a feudal interstellar society, Dune tells the story of young Paul Atreides as he and his family accept control of the desert planet Arrakis.",
                    image_url: "/images/dune.png",
                    price: 18.99
                },
                {
                    book_id: "4",
                    name: "Atomic Habits",
                    author: "James Clear",
                    published_date: "2018-10-16",
                    genre: "Self-help",
                    description: "An easy and proven way to build good habits and break bad ones using practical strategies that will teach you how to form good habits.",
                    image_url: "/images/atomic.png",
                    price: 27.99
                },
                {
                    book_id: "5",
                    name: "Pride and Prejudice",
                    author: "Jane Austen",
                    published_date: "1813-01-28",
                    genre: "Classic Romance",
                    description: "The story follows the main character Elizabeth Bennet as she deals with issues of manners, upbringing, morality, education, and marriage.",
                    image_url: "/images/pride.png",
                    price: 15.99
                },
                {
                    book_id: "6",
                    name: "The Code Breaker",
                    author: "Walter Isaacson",
                    published_date: "2021-03-09",
                    genre: "Biography",
                    description: "The story of Jennifer Doudna and her colleagues' development of CRISPR technology, a tool that can edit DNA.",
                    image_url: "/images/code.png",
                    price: 32.99
                },
                {
                    book_id: "7",
                    name: "The Thursday Murder Club",
                    author: "Richard Osman",
                    published_date: "2020-09-03",
                    genre: "Mystery",
                    description: "Four retirees meet weekly to solve cold cases, but find themselves in the midst of a real murder investigation.",
                    image_url: "/images/murder.png",
                    price: 22.99
                },
                {
                    book_id: "8",
                    name: "Klara and the Sun",
                    author: "Kazuo Ishiguro",
                    published_date: "2021-03-02",
                    genre: "Literary Fiction",
                    description: "Tells the story of Klara, an Artificial Friend with outstanding observational qualities, who watches customers come in the store to browse and maybe choose an AF.",
                    image_url: "/images/sun.png",
                    price: 26.99
                },
                {
                    book_id: "9",
                    name: "The Joy of Cooking",
                    author: "Irma S. Rombauer",
                    published_date: "1931-11-30",
                    genre: "Cookbook",
                    description: "A comprehensive cookbook that has taught millions of people how to cook, from complete beginners to experienced chefs.",
                    image_url: "/images/joy.png",
                    price: 35.99
                },
                {
                    book_id: "10",
                    name: "A Brief History of Time",
                    author: "Stephen Hawking",
                    published_date: "1988-03-01",
                    genre: "Science",
                    description: "Explores the nature of time, the universe, and our place within it, from the big bang to black holes.",
                    image_url: "/images/time.png",
                    price: 21.99
                }
            ]);
        },2000)
    }, []);
    return books;
}