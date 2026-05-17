export default function RecipeCard({ recipe }) {
  return (
    <div className="card">
      <img src={recipe.image} alt={recipe.name} />
      <h3>{recipe.name}</h3>
      <p>⭐ {recipe.rating}</p>
      <button>View Recipe</button>
    </div>
  );
}