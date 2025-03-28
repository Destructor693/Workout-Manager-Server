const mongoose = require("mongoose");
const User=require("../models/userModel");
const jwt=require("jsonwebtoken")

const createToken=(_id)=>{
    return jwt.sign({_id},process.env.SECRET,{expiresIn:'3d'});
}

//login user
async function loginUser(req,res){
    const {email,password}=req.body;

    try {
        const user=await User.login(email, password);

        //create a token
        const token=createToken(user._id);
        res.status(200).json({email,token});
    } catch (error) {
        res.status(400).json({error:error.message});
    }
    //res.json({mssg:"login done"});
}

//signup user
async function signupUser(req,res){
    //res.json({mssg:"signup done"});
    const {email,password}=req.body;

    try {
        const user=await User.signup(email,password);

        //create a token
        const token=createToken(user._id)
        res.status(200).json({email,token});
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}

module.exports={loginUser,signupUser};