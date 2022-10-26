const { Schema, model } = require("mongoose");

const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    maxlenght: 280,
    minlength: 1,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    getters: true,
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [], // array of nexted documents created with the reaction Schema
});

module.exports = Thoughts;
