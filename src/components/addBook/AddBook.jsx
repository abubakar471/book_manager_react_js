import "./AddBook.css";
import React from "react";
import BookForm from '../bookForm/BookForm';
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import BooksContext from "../../context/BooksContext";

const AddBook = () => {
  const { books, setBooks } = useContext(BooksContext);
  const navigate = useNavigate();
  const handleOnSubmit = (book) => {
    setBooks([book, ...books]);
    navigate("/");
  };

  return (
    <React.Fragment>
      <div className="addBook" >
        <BookForm handleOnSubmit={handleOnSubmit} />
      </div>
    </React.Fragment>
  );
};

export default AddBook;
