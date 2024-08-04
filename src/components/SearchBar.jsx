
import React from 'react';

const SearchBar = ({ setSearchTerm }) => {
  return (
    <input
      className='border border-black p-2'
      type="text"
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search tasks..."
    />
  );
};

export default SearchBar;
