import React, { useState } from "react";

import './SearchBar.css'
const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    setQuery(e.target.value);
    // Implement search functionality if needed
  };

  return (
    <input
      type="text"
      placeholder="Search products..."
      value={query}
      onChange={handleSearch}
    />
  );
};

export default SearchBar;