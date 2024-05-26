import express from "express";
import 'dotenv/config'
import StaticRouter from "../../routes/StaticRouter.js";
import LocalUserRouter from "../../routes/LocalUserRoute.js";
const app = express()

app.use('/api',StaticRouter)
app.use('/api/localuser',LocalUserRouter)
export default app 