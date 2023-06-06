import BookShow from "./BookShow";
import { useAtom } from "jotai";
import { valueAtom } from "../context/state";

function BookList({ books, onDelete, onEdit }) {
  const [value, setValue] = useAtom(valueAtom);

  const renderedBooks = books.map((book) => {
    return (
      <BookShow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit} />
    );
  });

  return (
    <div className="book-list">
      {value}
      <button onClick={()=>{
        setValue(value + 1);
      }}>Click</button>
      {renderedBooks}
    </div>
  );
}

export default BookList;
