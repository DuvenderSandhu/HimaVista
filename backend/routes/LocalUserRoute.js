import { Router } from "express";
import { crateLocalUser } from "../controllers/LocalUserController.js";

let LocalUserRouter= Router()

LocalUserRouter.route('/create').post(crateLocalUser)

export default LocalUserRouter