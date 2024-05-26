import mongoose, { Schema } from "mongoose";

let UserSchema= Schema({
    username:{
        type:String,
        unique:true,
        required:true,
        lowercase:true
    },
    email:{
        type:String,
        unique:true,
        required:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true,
    }
 
},{timeStamp:true})
let User= mongoose.model('User',UserSchema)
export default  User