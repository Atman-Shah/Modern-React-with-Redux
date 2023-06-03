import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  // ******************************************************************************
  // Whenever we update the state we're going to re-render the component the state
  // is defined in and all of that component's children.
  // ******************************************************************************
  // One way of decide how and where to locate our state we can look at all the
  // components that'll use that state and find the lowest common parent
  // ******************************************************************************
  // So here "books" peice of state will be used by BookShow, BookEdit, BookList,
  // & BookCreate components so we'll define "books" state in App
  // component which is the lowest common parent of all these components.
  const [books, setBooks] = useState([]);

  // ******************************************************************************
  // We're going to create 3 functions createBook, editBook, deleteBook in the
  // App component so that they can modify the "books" piece of state.
  // We're going to take these functions and pass them as props down in the
  // components like BookCreate etc.
  // ******************************************************************************

  const createBook = (title) => {
    // BAD CODE! it makes changes to existing array doesn't create a new one
    // books.push({ id: 123, title: title });
    const updatedBooks = [
      ...books,
      { id: Math.round(Math.random() * 9999), title },
    ];

    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <BookList books={books} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
