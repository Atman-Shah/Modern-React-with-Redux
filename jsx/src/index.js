// 1. Import React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom/client";

// 2. Get a reference to the div with id root.
const el = document.getElementById("root");

// 3. Tell react to take control of that element.
const root = ReactDOM.createRoot(el);

// 4. Create a component
function App() {
  const name = "Atman";
  const age = 22;

  return (
    <h1>
      My name is {name} & my age is {age}
    </h1>
  );
}

// 5. Show the component on the screen.
root.render(<App />);
