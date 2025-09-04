import React from "react";

const SearchBar = ({ search, setSearch }) => {
  return (
    <input
      type="text"
      className="form-control"
      placeholder="Cerca film"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default SearchBar;
