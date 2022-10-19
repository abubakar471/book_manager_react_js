import "./SearchBar.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ handleSearch }) => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();
    return (
        <>
            <form
                className="searchBar"
                onSubmit={(e) => {
                    e.preventDefault();
                    if (query !== '') navigate(`/search/${query}`);
                }}
            >
                <div className="searchBox">
                    <img src="/search.png" className="searchIcon" alt="search" />
                    <input type="text" onChange={(e) => setQuery(e.target.value)} value={query} placeholder="search for books or authors" className="searchInput" />
                </div>
                <button type="submit" className="searchBtn">Search</button>
            </form>
        </>
    )
}

export default SearchBar;