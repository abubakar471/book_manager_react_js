import "./SearchResults.css";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import BooksContext from "../../context/BooksContext";
import Book from "../book/Book";
import _ from 'lodash';

const SearchResults = () => {
    const { books, setBooks } = useContext(BooksContext);
    const { query } = useParams();
    const [filteredBooks, setFilteredBooks] = useState([]);
    const handleRemoveBook = (id) => {
        setBooks(books.filter((book) => book.id !== id));
    };


    useEffect(() => {
        if (query.length > 0) {
            setFilteredBooks(books.filter(book => {
                return book.bookname
                    .toLowerCase()
                    .replace(/\s/g, '')
                    .includes(query.toLowerCase().replace(/\s/g, '')) ||
                    book.author
                        .toLowerCase()
                        .replace(/\s/g, '')
                        .includes(query.toLowerCase().replace(/\s/g, ''))
            }))
        }
    }, [query, books]);
    return (
        <>
            <div className="searchResultsTitle">
                <h2>{filteredBooks.length !== 0 ?
                    "Showing Results " + filteredBooks.length + " out of " + books.length :
                    ""
                }</h2>
            </div>
            <div className="searchResults">
                {!_.isEmpty(filteredBooks) ? (
                    filteredBooks.map((book) => (
                        <Book key={book.id} {...book} handleRemoveBook={handleRemoveBook} />
                    ))
                ) : (
                    <p className="message">Nothing Matches Your Search !</p>
                )}
            </div>
        </>
    )
}

export default SearchResults;