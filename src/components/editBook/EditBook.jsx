import "./EditBook.css";
import "../bookForm/BookForm.css";
import React from 'react';
import BookForm from '../bookForm/BookForm';
import { useNavigate, useParams } from 'react-router-dom';
import { useContext } from 'react';
import BooksContext from "../../context/BooksContext";

const EditBook = () => {
    const {books, setBooks} = useContext(BooksContext);
    const { id } = useParams();
    const bookToEdit = books.find((book) => book.id === id);
    const navigate = useNavigate();
    const handleOnSubmit = (book) => {
        const filteredBooks = books.filter((book) => book.id !== id);
        setBooks([book, ...filteredBooks]);
        navigate('/');
    };

    return (
        <div className='editBook'>
            <BookForm book={bookToEdit} handleOnSubmit={handleOnSubmit} />
        </div>
    );
};

export default EditBook;