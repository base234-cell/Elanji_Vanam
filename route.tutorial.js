// routes/tutorial.js
const express = require('express');
const Tutorial = require('../models/tutorial');
const router = express.Router();

// Get all tutorials
router.get('/', async (req, res) => {
  try {
    const tutorials = await Tutorial.find();
    res.json(tutorials);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching tutorials', error });
  }
});

// Add a new tutorial
router.post('/', async (req, res) => {
  const { title, content, videoUrl } = req.body;

  try {
    const tutorial = new Tutorial({ title, content, videoUrl });
    await tutorial.save();
    res.status(201).json(tutorial);
  } catch (error) {
    res.status(500).json({ message: 'Error adding tutorial', error });
  }
});

module.exports = router;
