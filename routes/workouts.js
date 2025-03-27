const express = require("express");
const router = express.Router();
const requireAuth=require("../middleware/requireAuth")
const {
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
  fetchMuscleGroup
} = require("../controllers/workoutControllers");
//router.use(requireAuth)  //require autherization for all workout routes
router.get("/",requireAuth, getWorkout);
router.post("/",requireAuth, createWorkout);
router.patch("/:id", requireAuth,updateWorkout);
router.delete("/:id",requireAuth, deleteWorkout);
router.get("/api/workouts",requireAuth, fetchMuscleGroup);
module.exports = router;