// Removing elemtnts in an array
// *********************************************************************
// If the filter functions returns true the value is added to new array.
// FKT - Filter Keeps True. Filter function returns a brand new array.
// *********************************************************************
// E.g. colors = [red, green,blue].

import { useState } from "react";

function Practice() {
  const [colors, setColors] = useState([]);
  const [books, setBooks] = useState([
    { id: 1, title: "Harry Potter" },
    { id: 2, title: "Dark Tower" },
  ]);

  // remove by value of the element
  const removeColorByValue = (colorToRemove) => {
    const updatedColors = colors.filter((color) => {
      return color !== colorToRemove;
    });
    setColors(updatedColors);
  };

  // remove by value of the element
  const removeColorByIndex = (indexToRemove) => {
    const updatedColors = colors.filter((color, index) => {
      return color !== indexToRemove;
    });
    setColors(updatedColors);
  };

  // remove an element with a perticular id
  const removeBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  return <div>Practice</div>;
}

export default Practice;
