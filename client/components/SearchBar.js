import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [query, SetQuery] = useState('');

  const handleSubmit = () => {
    onSearch(query);
  };

  return (
    <div className='search-bar'>
      <input
        type='text'
        placeholder='🔍 Ready to explore?'
        value={query}
        onChange={(event) => SetQuery(event.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default SearchBar;
