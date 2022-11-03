const {
  getAllUsers,
  createUser,
  getSingleUser,
  updateUser,
  deleteUser,
} = require("../../controllers/userController");

const router = require("express").Router();

// Already at /api/users
router.route("/").get(getAllUsers).post(createUser);
router.route("/:id").get(getSingleUser).put(updateUser).delete(deleteUser);

// get route
// router.get("/something", (req, res) => {
//     // make a requet to the db using the thoughts model
//     res.send("hello");
//   });

//   // post route
//   router.post("/something", (req, res) => {
//     // make a requet to the db using the thoughts model
//     res.send("hello");
//   });

//   // put route
//   router.put("/something", (req, res) => {
//     // make a requet to the db using the thoughts model
//     res.send("hello");
//   });

//   // delete route
//   router.delete("/something", (req, res) => {
//     // make a requet to the db using the thoughts model
//     res.send("hello");
//   });
module.exports = router;
