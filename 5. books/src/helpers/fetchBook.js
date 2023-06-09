import axios from "axios";

export const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    return response.data;
  };