import BookShow from "./BookShow";
import { useEffect } from "react";
import { useAtom } from "jotai";
import { booksAtom } from "../context/state";
import { fetchBooks } from "../helpers/fetchBook";

function BookList() {
  const [books, setBooks] = useAtom(booksAtom);

  useEffect(() => {
    (async () => {
      const data = await fetchBooks();
      setBooks(data);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderedBooks = books.map((book) => {
    return (
      <BookShow key={book.id} book={book} />
    );
  });

  return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
