import { useEffect, useState } from "react";
import { api } from "../api/axios";
import RecipeCard from "../components/RecipeCard";

export default function Home() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    api.get("/recipes").then((res) => {
      setRecipes(res.data.recipes);
    });
  }, []);

  return (
    <div className="grid">
      {recipes.map((item) => (
        <RecipeCard key={item.id} recipe={item} />
      ))}
    </div>
  );
}