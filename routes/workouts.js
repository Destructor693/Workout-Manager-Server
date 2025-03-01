const express = require("express");
const router = express.Router();
const {
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
  fetchMuscleGroup
} = require("../controllers/workoutControllers");
router.get("/", getWorkout);
router.post("/", createWorkout);
router.patch("/:id", updateWorkout);
router.delete("/:id", deleteWorkout);
router.get("/api/workouts",fetchMuscleGroup);
module.exports = router;