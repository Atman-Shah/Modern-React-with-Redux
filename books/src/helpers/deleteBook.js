import axios from "axios";

export const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
}