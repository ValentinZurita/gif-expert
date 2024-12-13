import { GifItem } from "./GifItem";
import useFetchGifs from "../hooks/useFetchGifs";

/**
 * Componente GifGrid
 * @param {String} category Categoria
 * @returns Componente GifGrid
 */
export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  // Render
  return (
    <>
      {/* isLoading */}
      {isLoading && <p>Loading...</p>}

      {/* Nombre de la Categoria */}
      <h3>{category}</h3>

      {/* Listado de Gifs */}
      <div className="card-grid">
        {images.map((img) => (
          <GifItem key={img.id} {...img} />
        ))}
        ;
      </div>
    </>
  );
};
