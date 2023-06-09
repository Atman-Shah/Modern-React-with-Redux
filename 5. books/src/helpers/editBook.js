import axios from "axios";

export const editBookbyId = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });

    return response.data;
}