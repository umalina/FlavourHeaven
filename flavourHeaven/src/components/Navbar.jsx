import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar({ onSearch }) {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(input);
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="logo">🍴 FlavourHeaven</div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/category/chicken">Chicken</Link>
        <Link to="/category/desserts">Desserts</Link>
        <Link to="/category/cocktails">Cocktails</Link>
        <Link to="/category/mocktails">Mocktails</Link>
        <Link to="/category/smoothies">Smoothies</Link>
        <Link to="/about">About</Link>
      </div>
      <form className="search-bar" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search recipes..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">🔍</button>
      </form>
    </nav>
  );
}

export default Navbar;

