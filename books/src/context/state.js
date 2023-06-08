import { atom } from "jotai";

export const booksAtom = atom([]);

export const showEditAtom = atom("");

export const editBookByIDAtom = atom(
    null, // it's a convention to pass `null` for the first argument
    (get, set, editedBook) => {
      const books = get(booksAtom);
      const newBooks = books.map((b) => {
        if (b.id === editedBook.id) {
            b = editedBook;
        }

        return b;
      });

      set(booksAtom, newBooks)
    }
  );

  export const deleteBookByIDAtom = atom(
    null, // it's a convention to pass `null` for the first argument
    (get, set, id) => {
      const books = get(booksAtom);
      const newBooks = books.filter((b) => {
        return b.id !== id;
      });

      set(booksAtom, newBooks)
    }
  );

export const addBookAtom = atom(
    null,
    (get, set, newBook) => {
        const books = get(booksAtom);
        const newBooks = [...books, newBook];

        set(booksAtom, newBooks);
    }
);