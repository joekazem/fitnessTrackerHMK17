const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now()
  },

  exercises: [{
    type: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    duration: {
      type: Number,
      required: true
    },

    weight: Number,
    reps: Number,
    sets: Number,
    distance: Number

  }],
});

WorkoutSchema.virtual("getTotalDuration").get( function () {
  this.totalDuration =0;
  for (let i = 0; i < this.exercises.length; i++) {
    this.totalDuration += this.exercises[i].duration;

  }
  return this.totalDuration;
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;