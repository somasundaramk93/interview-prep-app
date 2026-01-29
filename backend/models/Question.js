const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  role: String,
  difficulty: String,
  question: String,
  answer: String
});

module.exports = mongoose.model("Question", questionSchema);
