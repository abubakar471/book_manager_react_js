import "./BookList.css";
import Book from "../book/Book";
import _ from 'lodash';
import { useContext } from 'react';
import BooksContext from "../../context/BooksContext";

const BooksList = () => {
    const { books, setBooks } = useContext(BooksContext);
    const handleRemoveBook = (id) => {
        setBooks(books.filter((book) => book.id !== id));
    };
    
    return (
        <>
            <div className="bookList">
                <h2>Book List</h2>

                <div className="booksContainer">
                    {!_.isEmpty(books) ? (
                        books.map((book) => (
                            <Book key={book.id} {...book} handleRemoveBook={handleRemoveBook} />
                        ))
                    ) : (
                        <p className="message">No books available. Please add some books.</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default BooksList;