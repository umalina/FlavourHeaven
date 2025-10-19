import React from "react";
import { useParams, Link } from "react-router-dom";
import "./RecipeDetails.css";

const recipes = [
  {
    id: 1,
    name: "Butter Chicken",
    image: "https://images.unsplash.com/photo-1606755962773-0d4c4f18f87a",
    ingredients: ["Chicken", "Butter", "Tomato Puree", "Cream", "Spices"],
    steps: ["Marinate chicken", "Cook in butter", "Add sauce", "Simmer and serve"],
  },
  {
    id: 2,
    name: "Chocolate Cake",
    image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hvY29sYXRlJTIwY2FrZXxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000",
    ingredients: ["Flour", "Cocoa", "Sugar", "Butter", "Eggs"],
    steps: ["Mix ingredients", "Bake for 30 mins", "Cool and serve"],
  },
  {
    id: 5,
    name: "Berry Blast Smoothie",
    image: "https://images.unsplash.com/photo-1565958011705-44e211f046c5",
    ingredients: ["Blueberries", "Strawberries", "Yogurt", "Honey"],
    steps: ["Blend all ingredients", "Serve chilled"],
    benefits: [
      "Boosts immunity",
      "High in antioxidants",
      "Improves digestion",
      "Great for skin health",
    ],
  },
];

function RecipeDetails() {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  return (
    <div className="recipe-details">
      <img src={recipe.image} alt={recipe.name} />
      <h2>{recipe.name}</h2>

      <h3>Ingredients:</h3>
      <ul>{recipe.ingredients.map((i, index) => <li key={index}>{i}</li>)}</ul>

      <h3>Steps:</h3>
      <ol>{recipe.steps.map((s, index) => <li key={index}>{s}</li>)}</ol>

      {recipe.benefits && (
        <>
          <h3>Health Benefits:</h3>
          <ul className="benefits">
            {recipe.benefits.map((b, index) => (
              <li key={index}>✅ {b}</li>
            ))}
          </ul>
        </>
      )}

      <Link to="/"><button>⬅ Back</button></Link>
    </div>
  );
}

export default RecipeDetails;
