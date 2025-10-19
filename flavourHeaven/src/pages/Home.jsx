import React from "react";
import RecipeCard from "../components/RecipeCard";
import "./Home.css";

function Home({ searchTerm }) {
  const allRecipes = [
    { id: 1, name: "Butter Chicken", category: "chicken", image: "https://www.shutterstock.com/image-photo/butter-chicken-meat-white-bowl-600nw-2483381383.jpg", desc: "Creamy and rich Indian-style chicken curry." },
    { id: 2, name: "Chocolate Cake", category: "desserts", image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hvY29sYXRlJTIwY2FrZXxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000", desc: "Rich molten chocolate delight." },
    { id: 3, name: "Mojito", category: "cocktails", image: "https://uglyducklingbakery.com/wp-content/uploads/2023/07/blue-mojito.jpg", desc: "Minty refreshing rum-based drink." },
    { id: 4, name: "Blue Lagoon Mocktail", category: "mocktails", image: "https://mindfulmocktail.com/wp-content/uploads/2021/02/sunrise-mocktail-recipe.jpeg", desc: "Tropical blue mocktail with lemon and mint." },
    { id: 5, name: "Berry Blast Smoothie", category: "smoothies", image: "https://orgain.com/cdn/shop/articles/OrgainPostWorkoutBerryBlastProteinSmoothie-Sierra-1.jpg?v=1715644696", desc: "Rich in antioxidants and boosts skin health." },
  ];

  const filtered = allRecipes.filter((r) =>
    r.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-page">
      <div className="hero">
        <h1>Welcome to FlavourHeaven 🍴</h1>
        <p>Where taste meets creativity — explore, cook & enjoy!</p>
      </div>

      <h2>{searchTerm ? `Search Results for "${searchTerm}"` : "Popular Recipes"}</h2>
      <div className="recipes-container">
        {filtered.map((r) => (
          <RecipeCard key={r.id} recipe={r} />
        ))}
      </div>
    </div>
  );
}

export default Home;
