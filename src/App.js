// client/src/App.js
import React, { useState, useEffect } from 'react';
import RecipeList from './RecipeList';
import RecipeForm from './RecipeForm';

function App() {
  const [recipes, setRecipes] = useState([]);

  // Fetch recipes from the backend
  useEffect(() => {
    fetch('http://localhost:5000/api/recipes')
      .then(res => res.json())
      .then(data => setRecipes(data))
      .catch(err => console.error('Error fetching recipes:', err));
  }, []);

  // Add new recipe to state
  const addRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
  };

  return (
    <div className="App">
      <h1>Recipe Sharing Platform</h1>
      <RecipeForm onAdd={addRecipe} />
      <RecipeList recipes={recipes} />
    </div>
  );
}

export default App;
