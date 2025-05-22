import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "One Punch",
  ]);

  const onAddCategory = (newCategory = "Valorant") => {
    if (categories.includes(newCategory)) return;
    setCategories((cat) => [newCategory, ...cat, ]);
    // setCategories((cat) => [...cat, "Valorant"]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
        onNewCategory={(newCategory) => onAddCategory(newCategory)}
      />

      <button onClick={() => onAddCategory()}>Agregar</button>

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
