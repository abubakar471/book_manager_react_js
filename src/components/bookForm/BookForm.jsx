import "./BookForm.css";
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const BookForm = (props) => {
    const [book, setBook] = useState({
        bookname: props.book ? props.book.bookname : '',
        author: props.book ? props.book.author : '',
        quantity: props.book ? props.book.quantity : '',
        price: props.book ? props.book.price : '',
        date: props.book ? props.book.date : ''
    });

    const [errorMsg, setErrorMsg] = useState('');
    const { bookname, author, price, quantity } = book;

    const handleOnSubmit = (event) => {
        event.preventDefault();
        const values = [bookname, author, price, quantity];
        let errorMsg = '';

        const allFieldsFilled = values.every((field) => {
            const value = `${field}`.trim();
            return value !== '' && value !== '0';
        });
        console.log(allFieldsFilled);

        if (allFieldsFilled) {
            const book = {
                id: uuidv4(),
                bookname,
                author,
                price,
                quantity,
                date: new Date()
            };
            props.handleOnSubmit(book);
        } else {
            errorMsg = 'Please fill out all the fields.';
        }
        setErrorMsg(errorMsg);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case 'quantity':
                if (value === '' || parseInt(value) === +value) {
                    setBook((prevState) => ({
                        ...prevState,
                        [name]: value
                    }));
                }
                break;
            case 'price':
                if (value === '' || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
                    setBook((prevState) => ({
                        ...prevState,
                        [name]: value
                    }));
                }
                break;
            default:
                setBook((prevState) => ({
                    ...prevState,
                    [name]: value
                }));
        }
    };

    return (
        <div className="bookForm">
            {errorMsg && <p className="errorMsg">{errorMsg}</p>}
            <form onSubmit={handleOnSubmit}>
                <div className="form-control">
                    <label className="bookName">Book Name</label>
                    <input
                        className="input-control"
                        type="text"
                        name="bookname"
                        value={bookname}
                        placeholder="Enter name of book"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-control">
                    <label className="bookName">Book Author</label>
                    <input
                        className="input-control"
                        type="text"
                        name="author"
                        value={author}
                        placeholder="Enter name of author"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-control">
                    <label className="bookName">Quantity</label>
                    <input
                        className="input-control"
                        type="number"
                        name="quantity"
                        value={quantity}
                        placeholder="Enter available quantity"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-control">
                    <label className="bookName">Book Price</label>
                    <input
                        className="input-control"
                        type="text"
                        name="price"
                        value={price}
                        placeholder="Enter price of book"
                        onChange={handleInputChange}
                    />
                </div>
                <button variant="primary" type="submit" className="submitBtn">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default BookForm;