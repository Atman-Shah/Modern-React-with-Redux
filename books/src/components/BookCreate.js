import { useState } from "react";

function BookCreate({ onCreate }) {
  const [title, setTitle] = useState("");

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
  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title);
    // ***********************************************
    // To empty out the input element after submission
    // ***********************************************
    setTitle("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input value={title} onChange={handleChange} />
        <button>Create!</button>
      </form>
    </div>
  );
}

export default BookCreate;
