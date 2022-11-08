const {
  getAllThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
} = require("../../controllers/thoughtController");

const router = require("express").Router();

// Already at /api/thoughts
router.route("/").get(getAllThoughts).post(createThought);
router
  .route("/:id")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

module.exports = router;
