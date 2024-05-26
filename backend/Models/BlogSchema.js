import mongoose, { Schema } from "mongoose";

let BlogSchema= Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:Number,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    localID:{
        type:Schema.Types.ObjectId,
        ref:'LocalUser'
    }
 
},{timeStamp:true})
let Blog= mongoose.model('Blog',BlogSchema)
export default  Blog