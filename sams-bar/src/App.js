import "./App.css";
import React, { useEffect } from "react";

function App() {
  // Async function to fetch from API
  async function getCocktailData(searchTerm) {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
    );
    const data = await response.json();
    console.log(data);
    // Cocktail details
    let cocktailName = data.drinks[0].strDrink;
    let cocktailImageURL = data.drinks[0].strImageSource;
    let cocktailIngredientOne = data.drinks[0].strIngredient1;
    let cocktailIngredientTwo = data.drinks[0].strIngredient2;
    console.log(
      cocktailName,
      cocktailImageURL,
      cocktailIngredientOne,
      cocktailIngredientTwo
    );
  }

  // Use Effect hook to manage effects of HTTP req after render
  useEffect(() => {
    getCocktailData("Margarita");
    getCocktailData("Old fashioned");
    getCocktailData("Negroni");
  });

  return (
    <div className="App">
      <header className="App-header">Hello</header>
    </div>
  );
}

export default App;
