import { useState } from "react";
import { editBookByIDAtom, showEditAtom } from "../context/state";
import { editBookbyId } from "../helpers/editBook";
import { useAtom } from "jotai";


function BookEdit({ book }) {
  const [title, setTitle] = useState(book.title);
  const [, setShowEdit] = useAtom(showEditAtom);
  const [, editBook] = useAtom(editBookByIDAtom);
  

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const editedBook = await editBookbyId(book.id, title);
    editBook(editedBook);
    setShowEdit("");
  };

  return (
    <form className="book-edit" onSubmit={handleSubmit}>
      <label>Title</label>
      <input className="input" value={title} onChange={handleChange} />
      <button className="button is-primary">Save</button>
    </form>
  );
}

export default BookEdit;
