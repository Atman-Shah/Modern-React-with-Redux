import { useState } from "react";

function App() {
  // *****************************************************************************
  // Whenever we update the state we're going to re-render the component the state
  // is defined in and all of that component's children.
  // ******************************************************************************
  // One way of decide how and where to locate our state we can look at all the
  // components that'll use that state and find the lowest common parent
  // ******************************************************************************
  // So here "books" peice of state will be used by BookShow, BookEdit, BookList,
  // BookShow & BookCreate components so we'll define "books" state in App
  // component which is the lowest common parent of all these components.
  const [books, setBooks] = useState([]);

  return <div>App</div>;
}

export default App;
