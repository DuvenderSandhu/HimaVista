import mongoose, { Schema } from "mongoose";

let LocalUserSchema= Schema({
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
let LocalUser= mongoose.model('LocalUser',LocalUserSchema)
export default  LocalUser