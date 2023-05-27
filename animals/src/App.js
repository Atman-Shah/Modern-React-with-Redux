function App() {
  // Method 1
  // const handleClick = () => {
  //   console.log("Button was clicked!");
  // };

  return (
    <div>
      {/* Method 1   */}
      {/* <button onClick={handleClick}>Add Animal</button> */}

      {/* Method 2 */}
      {/* <button onClick={function() {
        console.log("Button was clicked!")
      }}>Add Animal</button> */}

      {/* Method 3 */}
      {/* <button
        onClick={() => {
          console.log("Button was clicked!");
        }}
      >
        Add Animal
      </button> */}

      {/* Method 4 */}
      <button onClick={() => console.log("Button was clicked!")}>
        Add Animal
      </button>
    </div>
  );
}

export default App;
