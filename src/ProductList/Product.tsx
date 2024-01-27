import React, { useState } from "react";
import { SearchBar } from "./components/SearchBar";
import searchImages from "@/api/getApi";

interface Props {
  id: string;
  slug: string;
}

export const Product = () => {
  const [getData, setGetData] = useState([]);

  const handleSumbits = async (term: string) => {
    const results = await searchImages(term);
    setGetData(results);
  };

  const handleSumbit = (term: string) => {
    searchImages(term);
  };

  return (
    <div>
      <button onClick={() => handleSumbits("car")}>Show Data</button>
      {getData.map((data: Props, index: number) => {
        return <div key={index}>{data.id} </div>;
      })}
      <SearchBar onSubmit={handleSumbit} />
    </div>
  );
};
