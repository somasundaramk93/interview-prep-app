const router = require("express").Router();
const User = require("../models/User");
const auth = require("../middleware/authMiddleware");

router.post("/complete/:qid", auth, async (req, res) => {
  await User.findByIdAndUpdate(req.user.id, {
    $addToSet: { completedQuestions: req.params.qid }
  });
  res.json("Progress saved");
});

router.get("/profile", auth, async (req, res) => {
  const user = await User.findById(req.user.id).populate("completedQuestions");
  res.json(user);
});

module.exports = router;
