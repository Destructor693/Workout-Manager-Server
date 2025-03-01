const { Types } = require("mongoose");
const Workout = require("../models/workoutModel");
const mongoose = require("mongoose");
const muscleWiseWorkouts=require('../config/constants')
async function getWorkout(req, res) {
  const workouts = await Workout.find({}).sort({ createdAt: -1 });
  res.status(200).json(workouts);
}

async function createWorkout(req, res) {
  const { title, muscle_Group, weight, reps } = req.body;
  try {
    const workout = await Workout.create({ title, muscle_Group, weight, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json(error);
  }
}

async function updateWorkout(req, res) {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ err: "no such workout" });
  }
  try {
    const workout = await Workout.findOneAndUpdate(
      { _id: id },
      { ...req.body }
    );
    res.status(200).json(workout);
  } catch (error) {
    res.status(404).json({ err: "no such workout" });
  }
}

const deleteWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no such workout" });
  }
  const workout = await Workout.findOneAndDelete({ _id: id }); //in mongo db id is _id
  if (!workout) {
    return res.status(400).json({ err: "no such workout" });
  }
  res.json(workout);
};

 async function  fetchMuscleGroup(req,res) {
  try{res.status(200).json(muscleWiseWorkouts);}
  catch(error){
    res.status(400).json({err:error})
  }
  
}
module.exports = {
  getWorkout,
  createWorkout,
  updateWorkout,
  deleteWorkout,
  fetchMuscleGroup
};
