// Modifying elemtnts in an array

import { useState } from "react";

function Practice() {
  const [books, setBooks] = useState([
    { id: 1, title: "Harry Potter" },
    { id: 2, title: "Dark Tower" },
  ]);

  const updateBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }

      return book;
    });

    setBooks(updatedBooks);
  };

  return <div>Practice</div>;
}

export default Practice;
