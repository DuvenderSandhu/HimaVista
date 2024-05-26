import mongoose, { Schema } from "mongoose";

let ProductSchema= Schema({
    name:{
        type:String,
        required:true
    },
    description:{
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
let Product= mongoose.model('Product',ProductSchema)
export default  Product