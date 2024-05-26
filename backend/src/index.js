import app from "./app/app.js";

app.listen(process.env.PORT,()=>{
    console.log("App is Runining at port ",process.env.PORT)
})

