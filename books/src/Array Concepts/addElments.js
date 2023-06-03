// Adding elemtnts to the start of an array

import { useState } from "react";

function Practice() {
  const [colors, setColors] = useState([]);

  const addColor = (newColor) => {
    const updatedColors = [
      newColor,
      // *****************************************************
      // "...colors" means take all the existing elements from
      // colors array and copy paste them here.
      // *****************************************************
      ...colors,
    ];

    setColors(updatedColors);
  };

  return <div>Practice</div>;
}

export default Practice;
