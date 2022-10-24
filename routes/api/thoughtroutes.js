const router = require("express").Router();

// Already at /api/thoughts
router.get("/something", (req, res) => {
  // make a requet to the db using the thoughts model
  res.send("hello");
});
module.exports = router;
