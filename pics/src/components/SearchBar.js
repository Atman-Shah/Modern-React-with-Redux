function SearchBar({ onSubmit }) {
  const handleClick = (event) => {
    event.preventDefault();

    onSubmit("cars");
  };

  return (
    <div>
      <form onSubmit={handleClick}>
        <input />
      </form>
    </div>
  );
}

export default SearchBar;
