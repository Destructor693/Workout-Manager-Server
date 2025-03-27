const mongoose=require('mongoose');
const {muscleGroups}=require('../config/constants')
const Schema =mongoose.Schema;
const workoutSchema=new Schema({
    title:{
        type:String,
        required: true
    }, 
    muscle_Group:{
        type:String,
        enum:[muscleGroups],
        required:true
    },
    reps:{
        type:Number,
        required:true
    },
    user_id:{
        type:String,
        required:true
    },
    weight:{
        type:Number,
        required:true
    }
},{timestamps:true})
module.exports=mongoose.model('project_workout',workoutSchema);