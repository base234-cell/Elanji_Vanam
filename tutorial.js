// models/tutorial.js
const mongoose = require('mongoose');

const tutorialSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  videoUrl: {
    type: String,
  },
});

module.exports = mongoose.model('Tutorial', tutorialSchema);
