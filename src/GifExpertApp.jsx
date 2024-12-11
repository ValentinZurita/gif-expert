import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Dungeons & Dragons"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([...categories, newCategory]);
  };

  return (
    <>
      {/* titulo */}
      <h2>GifExpertApp</h2>

      {/* Input */}
      <AddCategory onAddCategory={onAddCategory} />

      {/* Listado de Gifs */}
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
