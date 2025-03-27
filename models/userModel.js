const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const bcrypt = require('bcrypt');
const validator=require('validator')
const userSchema=new Schema({
    email:{
        type:String,
        required: true,
        unique:true
    },
    password:{
        type:String,
        required: true
    }})

    //static signup funciton
    userSchema.statics.signup=async function(email,password){

        //validation
        if(!email || !password){
            throw Error("All fields must be filled")
        }
        if(!validator.isEmail(email)){
            throw Error("Enter a valid email-id")
        }
        if(!validator.isStrongPassword(password)){
            throw Error("The password is not strong enough")
        }

        const exists= await this.findOne({email})
        if(exists){
            throw Error("Email already in use");
        }

        const salt=await bcrypt.genSalt(10);  //additional string added to password to increase security; the nuumber is the number of salt rounds, more the rounds more will be the time taken to generate salt
        const hash=await bcrypt.hash(password, salt);

        const user=await this.create({email, password:hash});
        return user;
    }

    //static login function
    userSchema.statics.login=async function(email,password){
         //validation
         if(!email || !password){
            throw Error("All fields must be filled")
        }
        const user= await this.findOne({email})
        if(!user){
            throw Error("Email not registered");
        }
        const match=await bcrypt.compare(password,user.password)
        if(!match){
            throw Error("Incorrect password");
        }
        return user;
    }

    module.exports=mongoose.model('User', userSchema);

    