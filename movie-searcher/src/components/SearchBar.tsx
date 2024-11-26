import React, { useState } from "react";
import logo from '../images/tmdb-logo.svg';
import "../App.css";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setQuery(inputValue);
    if (inputValue.length >= 2) {
      onSearch(inputValue);
    }
  };

  return (
    <div className="search-container">
      <img src={logo} alt="TMDB Logo" width="150px" height="150px" />
      <h1>Welcome.</h1>
      <p>Millions of movies, TV shows and people to discover. Explore now.</p>
      <div className="input-container">
        <input
          type="text"
          placeholder="Search for a movie, TV show, person..."
          value={query}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default SearchBar;
