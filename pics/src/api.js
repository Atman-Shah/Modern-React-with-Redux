import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID _x6K5yIyA72wdL71cgt-V6itSlqLVQvpOXLWsbgOTcQ",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
