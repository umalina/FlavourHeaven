import React from "react";
import { useParams } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";
import "./Category.css";

function Category() {
  const { type } = useParams();

  const recipes = {
    chicken: [
      { id: 1, name: "Butter Chicken", image: "https://theyummydelights.com/wp-content/uploads/2018/07/Indian-butter-chicken-recipe.jpg", desc: "Creamy and rich Indian-style chicken curry." },
      { id: 2, name: "Grilled Chicken", image: "https://www.budgetbytes.com/wp-content/uploads/2024/06/Grilled-Chicken-Overhead-500x500.jpg", desc: "Juicy grilled chicken seasoned to perfection." },
    ],
    desserts: [
      { id: 3, name: "Chocolate Cake", image: "https://www.habibbakery.ae/cdn/shop/products/696-wpp1679908814915.jpg?v=1707301211", desc: "Rich molten chocolate delight." },
      { id: 4, name: "Cheesecake", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587", desc: "Creamy cheesecake topped with fresh berries." },
    ],
    cocktails: [
      { id: 5, name: "Mojito", image: "https://www.tasteofhome.com/wp-content/uploads/2018/01/EXPS_TOHVP24_37188_MF_04_10_2.jpg", desc: "Minty refreshing rum-based drink." },
      { id: 6, name: "Cosmopolitan", image: "https://entirelyelizabeth.com/wp-content/uploads/2023/01/IMG_7055-2-500x500.jpg", desc: "Citrusy cranberry-flavored cocktail." },
    ],
    mocktails: [
      { id: 7, name: "Virgin Mojito", image: "https://www.munatycooking.com/wp-content/uploads/2023/10/Virgin-Mojito-image-3-2023.jpg", desc: "Lime and mint cooler, alcohol-free!" },
      { id: 8, name: "Blue Lagoon", image: "https://www.cocktailplans.com/wp-content/uploads/2025/02/blue-lagoon-mocktail-recipe-0001.jpg", desc: "Tropical blue mocktail with lemon and mint." },
    ],
    smoothies: [
      { id: 9, name: "Berry Blast", image: "https://thebombco.com/cdn/shop/articles/21.png?v=1696254655&width=1200", desc: "Rich in antioxidants and boosts skin health." },
      { id: 10, name: "Green Detox Smoothie", image: "https://www.delscookingtwist.com/wp-content/uploads/2025/01/Green-Detox-Smoothie_1.jpg", desc: "Boosts immunity with spinach, apple, and ginger." },
    ],
  };

  const selected = recipes[type] || [];

  return (
    <div className="category-page">
      <h2>{type.charAt(0).toUpperCase() + type.slice(1)} Recipes</h2>
      <div className="recipes-container">
        {selected.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default Category;
