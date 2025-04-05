// client/src/RecipeList.js
import React from 'react';

const RecipeList = ({ recipes }) => {
  return (
    <div>
      {recipes.map(recipe => (
        <div key={recipe.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
          <h2>{recipe.title}</h2>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
