import axios from "axios";

const searchImages = async () => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID _x6K5yIyA72wdL71cgt-V6itSlqLVQvpOXLWsbgOTcQ",
    },
    params: {
      query: "cars",
    },
  });

  console.log(response);
  return response;
};

export default searchImages;
