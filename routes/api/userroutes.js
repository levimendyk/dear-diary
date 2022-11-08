const {
  getAllUsers,
  createUser,
  getSingleUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/userController");

const router = require("express").Router();

// Already at /api/users
router.route("/").get(getAllUsers).post(createUser);
router.route("/:id").get(getSingleUser).put(updateUser).delete(deleteUser);
router.route("/:userId/friends/:friendId").put(addFriend).delete(deleteFriend);

module.exports = router;
