const muscleGroups = {
  CHEST: "chest",
  BICEPS: "biceps",
  SHOULDERS: "shoulders",
  LEGS: "legs",
  TRICEPS: "triceps",
  BACK: "back",
  FOREARMS: "forearms",
  ABS: "abs",
  GLUTES: "glutes",
};
const muscleWiseWorkouts = [
  {
    name: "chest",
    exercises: [
      "Flat Bench Press",
      "Incline Bench Press",
      "Decline Bench Press",
      "Flat Dumbbell Press",
      "Incline Dumbbell Press",
      "Decline Dumbbell Press",
      "Chest Fly",
      "Pec Deck Machine",
      "Cable Crossovers (High-to-Low)",
      "Cable Crossovers (Low-to-High)",
      "Weighted Dips",
      "Push-Ups (Standard, Incline, Decline)",
      "Plyometric Push-Ups",
    ],
  },
  {
    name: "back",
    exercises: [
      "Pull-Ups (Wide, Neutral, Close Grip)",
      "Lat Pulldowns (Wide, Reverse, Close Grip)",
      "Barbell Rows",
      "Dumbbell Rows (Single Arm)",
      "T-Bar Rows",
      "Seated Cable Rows",
      "Deadlifts (Conventional, Romanian, Sumo)",
      "Straight Arm Pulldown",
      "Face Pulls",
      "Shrugs (Trap Focus)",
    ],
  },
  {
    name: "legs",
    exercises: [
      "Back Squat",
      "Front Squat",
      "Goblet Squat",
      "Leg Press",
      "Walking Lunges",
      "Bulgarian Split Squats",
      "Step-Ups",
      "Romanian Deadlifts (RDL)",
      "Hamstring Curls (Seated, Lying, Standing)",
      "Good Mornings",
      "Hip Thrusts",
      "Glute Bridges",
      "Cable Kickbacks",
      "Standing Calf Raises",
      "Seated Calf Raises",
    ],
  },
  {
    name: "shoulders",
    exercises: [
      "Overhead Press (Barbell, Dumbbell, Machine)",
      "Arnold Press",
      "Lateral Raises",
      "Front Raises",
      "Rear Delt Fly (Dumbbell, Cable, Reverse Pec Deck)",
      "Shrugs (Dumbbell, Barbell, Smith Machine)",
      "Face Pulls",
      "Push Press",
      "Handstand Push-Ups",
    ],
  },
  {
    name: "biceps",
    exercises: [
      "Barbell Curls",
      "EZ-Bar Curls (Wide Grip, Close Grip)",
      "Dumbbell Curls (Hammer, Supinated, Concentration)",
      "Alternating Dumbbell Curls",
      "Incline Dumbbell Curls",
      "Cable Curls (Straight Bar, Rope, Single Arm)",
      "Preacher Curls (Machine or Bench)",
    ],
  },
  {
    name: "triceps",
    exercises: [
      "Close-Grip Bench Press",
      "Dips (Tricep-Focused)",
      "Tricep Pushdowns (Rope, Straight Bar)",
      "Overhead Tricep Extension (Dumbbell, Rope)",
      "Skull Crushers (EZ-Bar, Dumbbell)",
      "Kickbacks (Dumbbell, Cable)",
      "Diamond Push-Ups",
      "Parallel Bar Dips",
    ],
  },
  {
    name: "core",
    exercises: [
      "Plank Variations (Standard, Side Plank, Shoulder Taps)",
      "Crunches (Standard, Reverse, Bicycle)",
      "Leg Raises (Hanging, Lying)",
      "Cable Woodchoppers",
      "Weighted Sit-Ups",
      "Russian Twists (With Plate or Medicine Ball)",
      "Ab Rollouts (Using an Ab Wheel)",
      "Stability Ball Plank",
      "Dragon Flags",
      "L-Sits",
      "Toes-to-Bar",
    ],
  },
];
module.exports = { muscleGroups, muscleWiseWorkouts };
