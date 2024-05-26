import { connect } from "mongoose";

async function connectToMongo(){
    try{
        await connect(process.env.DB_HOST)
        return {status:1}
    }   
    catch(error){
        return {status:0,error}
    } 
}

export default connectToMongo