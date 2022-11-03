const { Thought, User } = require("../models");

// Gets all thoughts Controllers
const thoughtController = {
  getAllThoughts(req, res) {
    Thought.find().then((data) => res.json(data));
  },
};

// 

module.exports = thoughtController;
