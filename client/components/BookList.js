import React from 'react';
import BookInfo from './BookInfo.js';

function BookList({ books }) {
  return (
    <div>
      {books.map((book) => (
        <div key={book.id}>
          <BookInfo book={book} />
        </div>
      ))}
    </div>
  );
}

export default BookList;
