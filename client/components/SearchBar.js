import React, { useState } from 'react';
import styled from 'styled-components';

function SearchBar({ onSearch }) {
  const [query, SetQuery] = useState('');

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onSearch(query);
    }
  };

  return (
    <div className='search-bar'>
      <input
        type='text'
        placeholder='Search here'
        value={query}
        onChange={(event) => SetQuery(event.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default SearchBar;
