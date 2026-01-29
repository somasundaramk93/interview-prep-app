const router = require("express").Router();
const Question = require("../models/Question");
const auth = require("../middleware/authMiddleware");

router.get("/:role", auth, async (req, res) => {
  const questions = await Question.find({ role: req.params.role });
  res.json(questions);
});

module.exports = router;
