import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from '../components/header/Header';
import AddBook from '../components/addBook/AddBook';
import BookList from '../components/bookList/BookList';
import EditBook from '../components/editBook/EditBook';
import useLocalStorage from '../components/hooks/useLocalStorage';
import BooksContext from '../context/BooksContext';
import Footer from '../components/footer/Footer';
const AppRouter = () => {
    const [books, setBooks] = useLocalStorage('books', []);

    return (
        <>
            <BrowserRouter>
                <Header />
                <BooksContext.Provider value={{ books, setBooks }}>
                    <Routes>
                        <Route
                            element={<BookList />}
                            path="/"
                            exact
                        />
                        <Route
                            element={<AddBook />}
                            path="/add"
                            exact
                        />
                        <Route
                            element={<EditBook />}
                            path="/edit/:id"
                            exact
                        />
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </BooksContext.Provider>

                <Footer />
            </BrowserRouter>
        </>
    );
};

export default AppRouter;
