import { useState } from "react";
import { SearchBar } from "./components/SearchBar";
import { ImagesList } from "./components/ImagesList";
import searchImages from "@/api/getApi";

export interface UrlProps {
  full: string;
  raw: string;
  regular: string;
  small: string;
  small_s3: string;
  thumb: string;
}
export interface ImageProps {
  alt_description: string;
  urls: UrlProps;
}

export const Product = () => {
  const [images, setImages] = useState<ImageProps[]>([]);

  const handleSumbit = async (term: string) => {
    const result = await searchImages(term);
    setImages(result);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSumbit} />
      <ImagesList images={images} />
    </div>
  );
};
