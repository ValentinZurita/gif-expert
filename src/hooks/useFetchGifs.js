import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export default function useFetchGifs(category) {
  // Estado para almacenar las imagenes
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Funcion para obtener las imagenes
  const getImages = async () => {
    const gifs = await getGifs(category);
    setImages(gifs);
    setIsLoading(false);
    
  };

  // Hook para obtener las imagenes
  useEffect(() => {
    getImages();
  }, []);

  return {
    images,
    isLoading
  };
}
