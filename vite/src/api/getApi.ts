import axios from "axios";

const searchImages = async (term: string) => {
  const response = await axios.get(
    `${import.meta.env.VITE_BASEURL}search/photos`,
    {
      headers: {
        Authorization: import.meta.env.VITE_SEARCHIMAGES_KEY,
      },
      params: {
        query: term,
      },
    }
  );

  return response.data.results;
};

export default searchImages;
