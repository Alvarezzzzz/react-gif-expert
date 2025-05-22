import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

const getImages = async (category, setImages, setIsLoading) => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
  };

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getImages(category, setImages, setIsLoading);
  }, [category]);

  return {
    images,
    isLoading,
  };
};
