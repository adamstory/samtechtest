import './App.css';
import React, {useEffect} from "react";

function App() {

async function getCocktailData() {
  const response = await fetch ("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=Margarita")
  const data = await response.json();
  console.log(data);
}

useEffect(()=>{
  getCocktailData();
})

  return (
    <div className="App">
      <header className="App-header">
       Hello
      </header>
    </div>
  );
}

export default App;
