import React from "react";
import { Link } from "react-router-dom";
import "./RecipeCard.css";

function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.name} />
      <h3>{recipe.name}</h3>
      <p>{recipe.desc}</p>
      <Link to={`/recipe/${recipe.id}`}>
        <button>View Recipe</button>
      </Link>
    </div>
  );
}

export default RecipeCard;



