import { useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import { fetchBooks } from "./helpers/fetchBook";

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
  // ******************************************************************************
  // const [books, setBooks] = useState([]);

  // const fetchBooks = async () => {
  //   const response = await axios.get("http://localhost:3001/books");

  //   setBooks(response.data);
  // };

  // Don't do this (infinite loop)
  // fetchBooks();

  // ******************************************************************************
  // We're going to create 3 functions createBook, editBook, deleteBook in the
  // App component so that they can modify the "books" piece of state.
  // We're going to take these functions and pass them as props down in the
  // components like BookCreate etc.
  // ******************************************************************************
  // const createBook = async (title) => {
  //   const response = await axios.post("http://localhost:3001/books", {
  //     title,
  //   });

  //   // BAD CODE! it makes changes to existing array doesn't create a new one
  //   // books.push({ id: 123, title: title });
  //   const updatedBooks = [...books, response.data];

  //   setBooks(updatedBooks);
  // };

  // const deleteBookById = async (id) => {
  //   await axios.delete(`http://localhost:3001/books/${id}`);

  //   const updatedBooks = books.filter((book) => {
  //     return book.id !== id;
  //   });

  //   setBooks(updatedBooks);
  // };

  // const editBookById = async (id, newTitle) => {
  //   const response = await axios.put(`http://localhost:3001/books/${id}`, {
  //     title: newTitle,
  //   });

  //   const updatedBooks = books.map((book) => {
  //     if (book.id === id) {
  //       return { ...book, ...response.data };
  //     }

  //     return book;
  //   });

  //   setBooks(updatedBooks);
  // };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;