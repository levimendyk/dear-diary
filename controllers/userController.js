const { ObjectId } = require("mongoose").Types;
const { User, Thought } = require("../models");

// Gets all Users Controller
const userController = {
  getAllUsers(req, res) {
    User.find().then((data) => res.json(data));
  },
  // Get a single user by its ID and populated through firend data
  getSingleUser(req, res) {
    User.findById(req.params.id).then((data) => res.json(data));
  },

  // Post a new User
  createUser(req, res) {
    User.create(req.body).then((data) => res.json(data));
  },

  // Update a user
  updateUser(req, res) {
    User.findByIdAndUpdate(req.params.id, req.body).then((data) =>
      res.json({ message: "User Updated" })
    );
  },

  // Delete a user
  deleteUser(req, res) {
    User.findByIdAndDelete(req.params.id).then((data) => {
      if (!data) {
        return res.status(404).json({ message: "No user with this ID" });
      }
      res.json({ message: "User Deleted", deletedUser: data });
    });
  },
  // /api/users/:userId/friends/:friendId
  addFriend(req, res) {
    User.findByIdAndUpdate(req.params.userId, {
      $addToSet: { friends: req.params.friendId },
    }, {new: true})
      .then((data) => res.json(data))
      .catch((err) => res.status(500).json(err));
  },
  deleteFriend(req, res) {
    User.findByIdAndUpdate(req.params.userId, {
      $pull: { friends: req.params.friendId },
    }, {new: true})
      .then((data) => res.json(data))
      .catch((err) => res.status(500).json(err));
  },
};

module.exports = userController;
