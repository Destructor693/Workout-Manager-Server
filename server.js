const express = require("express");
const app = express();
const cors = require('cors');
const mongoose = require("mongoose");
const Workouts=require('./models/workoutModel')
const workoutRoutes=require('./routes/workouts')
const userRoutes=require('./routes/user')
require('dotenv').config();
app.use(
  cors({
      origin:"*"
  })
)
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("listening on port 5000");
    });
  })
  .catch((err) => {
    console.log(err);
  });

//middleware
app.use(express.json()); //req.body will now hold the body of the request

app.use('/',workoutRoutes);
app.use('/user',userRoutes);