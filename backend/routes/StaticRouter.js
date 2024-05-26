import { Router } from "express";

let StaticRouter= Router()
StaticRouter.route('/').get((req,res)=>{
    res
    .status(400)
    .send("THis is Good")
})

export default StaticRouter