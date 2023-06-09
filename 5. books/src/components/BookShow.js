import BookEdit from "./BookEdit";
import { useAtom } from "jotai";
import { showEditAtom } from "../context/state";
import { deleteBookByIDAtom } from "../context/state";
import { deleteBookById } from "../helpers/deleteBook";


function BookShow({ book }) {
  const [showEdit, setShowEdit] = useAtom(showEditAtom);
  const [, deleteBook] = useAtom(deleteBookByIDAtom);

  const handleDeleteClick = async () => {
    await deleteBookById(book.id);
    deleteBook(book.id);
  };

  const handleEditClick = () => {
    if (showEdit === book.id) {
      setShowEdit("");
    } else {
      setShowEdit(book.id);
    }
  };

  let content = <h3>{book.title}</h3>;
  if (showEdit === book.id) {
    content = <BookEdit book={book} />;
  }

  return (
    <div className="book-show">
      <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`} />
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
