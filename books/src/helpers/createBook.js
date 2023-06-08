import axios from "axios";

export const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {
      title,
    });

    return response.data;
}