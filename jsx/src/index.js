// 1. Import React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom/client";

// 2. Get a reference to the div with id root.
const el = document.getElementById("root");

// 3. Tell react to take control of that element.
const root = ReactDOM.createRoot(el);

// 4. Create a component
function App() {
  // This is one approch
  // let date = new Date();
  // let time = date.toLocaleTimeString();

  // return <h1>{time}</h1>;

  // OR you can write JS expressions directly in the curly beackets
  return <h1>{new Date().toLocaleTimeString()}</h1>;
}

// 5. Show the component on the screen.
root.render(<App />);
