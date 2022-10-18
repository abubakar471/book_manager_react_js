import "./Book.css";
import { useNavigate } from "react-router-dom";

const Book = ({ id, bookname, author, price, quantity, date, handleRemoveBook }) => {
    const navigate = useNavigate();
    return (
        <>
            <div className="book">
                <h1 className="bookTitle">{bookname}</h1>
                <div className="bookDetails">
                    <div className="bookAuthor">Author: {author}</div>
                    <div>Quantity: {quantity} </div>
                    <div>Price: {price} </div>
                    <div>Date: {new Date(date).toDateString()}</div>
                </div>
                <button className="editBtn" variant="primary" onClick={() => navigate(`/edit/${id}`)}>Edit</button>{' '}
                <button className="deleteBtn" variant="danger" onClick={() => handleRemoveBook(id)}>
                    Delete
                </button>
            </div>
        </>
    )
}

export default Book;