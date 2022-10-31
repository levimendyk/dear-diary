const { Schema, model } = require("mongoose");
// require reactions

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 1,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (time) => new Date(time).toLocaleDateString(),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [], // array of nexted documents created with the reaction Schema
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;
