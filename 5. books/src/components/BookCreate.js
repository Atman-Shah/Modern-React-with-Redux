import { useState } from "react";
import { createBook } from "../helpers/createBook";
import { useAtom } from "jotai";
import { addBookAtom } from "../context/state";

function BookCreate() {
  const [title, setTitle] = useState("");
  const [, addBook] = useAtom(addBookAtom);

  // ****************************************************************************
  // This is going to keep track whenever user changes the text input in any way.
  // ****************************************************************************
  // Evenhandlers that are wired up to input elements are going to receive an
  // event object as the first argument.
  // ****************************************************************************
  // we use event.target.value to figureout what user just typed into that input.
  // ****************************************************************************
  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  // ************************************************************************
  // Whenever user submits the form we want to call onCreate and pass in the
  // title that we have been maintaining.
  // ************************************************************************
  const handleSubmit = async (event) => {
    event.preventDefault();
    const book = await createBook(title);
    addBook(book);
    // ***********************************************
    // To empty out the input element after submission
    // ***********************************************
    setTitle("");
  };

  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input value={title} onChange={handleChange} className="input" />
        <button className="button">Create!</button>
      </form>
    </div>
  );
}

export default BookCreate;
