// **********************************************************************************
// Inserting elemtnts into an array
// **********************************************************************************
// Slice function is used on an array to return a number of elements out
// of that array, let's understand it with an example
// colors = [red, blue, green].
// colors.slice(0,1) = [red], colors.slice(0,2) = [red, blue], colors.slice(0,0) = []
// colors.slice(1) = [green, blue], colors.slice(2) = [blue]
// **********************************************************************************

import { useState } from "react";

function Practice() {
  const [colors, setColors] = useState([]);

  const addColorAtIndex = (newColor, index) => {
    const updatedColors = [
      // ******************************************************************
      // "...colors.slice(0, index)" means take all the existing elements from
      // 0th index of colors array upto & not including "index"th element array
      // & copy paste them here.
      // *****************************************************
      ...colors.slice(0, index),
      newColor,
      // ******************************************************************
      // "...colors.slice(index)" means take all the existing elements from
      // colors array from index to end of the array & copy paste them here.
      // *****************************************************
      ...colors.slice(index),
    ];

    setColors(updatedColors);
  };

  return <div>Practice</div>;
}

export default Practice;
