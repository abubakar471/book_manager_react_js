import "./Header.css";
import { Link } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";

const Header = () => {
    return (
        <header>
            <h1 className="headerTitle">💬 Book Management</h1>
            <SearchBar />
            <hr />
            <div className="links">
                <Link to="/" className="link">
                    Books List
                </Link>
                <Link to="/add" className="link" >
                    Add Book
                </Link>
            </div>
        </header>
    )
}

export default Header;