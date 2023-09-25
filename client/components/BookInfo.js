import React from 'react';

function BookInfo({ book }) {
  return (
    <div className='book-info'>
      <img src={book.thumbnail} alt={book.title} />
      <h2>{book.title}</h2>
      <p>Author:{book.author}</p>
      <p>Publisher:{book.publisher}</p>
      <p>Price:${book.price}</p>
    </div>
  );
}

export default BookInfo;
