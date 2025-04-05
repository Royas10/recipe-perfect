// server/index.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to allow cross-origin requests and JSON parsing
app.use(cors());
app.use(express.json());

// In-memory store for recipes (for demo purposes)
let recipes = [
  { id: 1, title: "Spaghetti", description: "Delicious spaghetti with tomato sauce" }
];

// GET /api/recipes – return the list of recipes
app.get('/api/recipes', (req, res) => {
  res.json(recipes);
});

// POST /api/recipes – add a new recipe
app.post('/api/recipes', (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).json({ error: "Missing title or description" });
  }
  const newRecipe = { id: recipes.length + 1, title, description };
  recipes.push(newRecipe);
  res.status(201).json(newRecipe);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
