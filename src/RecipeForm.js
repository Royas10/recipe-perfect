// client/src/RecipeForm.js
import React, { useState } from 'react';

const RecipeForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecipe = { title, description };

    // Send the new recipe to the backend
    fetch('http://localhost:5000/api/recipes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newRecipe),
    })
      .then(res => res.json())
      .then(data => {
        onAdd(data); // update the recipe list
        setTitle('');
        setDescription('');
      })
      .catch(err => console.error('Error adding recipe:', err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Recipe Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Recipe Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
        required
      ></textarea>
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default RecipeForm;
