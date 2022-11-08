const { Thought, User } = require("../models");

// Gets all thoughts Controllers
const thoughtController = {
  getAllThoughts(req, res) {
    Thought.find().then((data) => res.json(data));
  },
  getSingleThought(req, res) {
    Thought.findById(req.params.id).then((data) => res.json(data));
  },
  createThought(req, res) {
    Thought.create(req.body)
      .then((data) => res.json(data))
      .catch((err) => res.status(500).json({ err }));
  },
  updateThought(req, res) {
    Thought.findByIdAndUpdate(req.params.id, req.body).then((data) =>
      res.json({ message: "Thought Updated" })
    );
  },
  deleteThought(req, res) {
    Thought.findByIdAndDelete(req.params.id).then((data) => {
      if (!data) {
        return res.status(404).json({ message: "No thought found" });
      }
      res.json({ message: "Thought Found", deletedThought: data });
    });
  },
};

module.exports = thoughtController;
