import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const [cocktailName, setCocktailName] = useState("");
  const [cocktailImage, setCocktailImage] = useState("");
  const [cocktailIngredientOne, setCocktailIngredientOne] = useState("");
  const [cocktailIngredientTwo, setCocktailIngredientTwo] = useState("");

  // Async function to fetch from API
  async function getCocktailData(searchTerm) {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
    );
    const data = await response.json();

    // Set cocktail details
    setCocktailName(data.drinks[0].strDrink);
    setCocktailImage(data.drinks[0].strDrinkThumb);
    setCocktailIngredientOne(data.drinks[0].strIngredient1);
    setCocktailIngredientTwo(data.drinks[0].strIngredient2);
  }

  // Use Effect hook to manage effects of HTTP req after render, only search when search is changed
  useEffect(() => {
    getCocktailData(searchTerm);
  }, [searchTerm]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>{`Welcome to Sam's Bar!`}</h1>
        <h2>Enter a name of a cocktail in the input field</h2>
        <input
          type="text"
          onChange={(e) => setSearchTerm(e.target.value)}
        ></input>
        <div className="cocktail_info">
          <h2 className="cocktail_name">Cocktail Name: {cocktailName}</h2>
          <img src={cocktailImage} alt="cocktail_image"></img>
          <h3 className="cocktail_ingredients">
            Ingredients: {cocktailIngredientOne}, {cocktailIngredientTwo}
          </h3>
        </div>
      </header>
    </div>
  );
}

export default App;
