// 1. Import React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom/client";

// 2. Get a reference to the div with id root.
const el = document.getElementById("root");

// 3. Tell react to take control of that element.
const root = ReactDOM.createRoot(el);

// 4. Create a component
function App() {
  // const inputType = "number";
  // const minValue = 5;

  // return <input type={inputType} min={minValue} />;

  // This is equivalent to the commented version above
  return <input type="number" min={5} style={{ border: "3px solid red" }} />;
  // We can provide strings, numbers, arrays, objects and variables as a prop.
  // Note: If we try to display an object it doesn't work,
  // however we can provide object as a prop. like we are providing one in style.
}

// 5. Show the component on the screen.
root.render(<App />);
