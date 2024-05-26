import bcrypt from "bcryptjs/dist/bcrypt.js";
import LocalUser from "../Models/LocalUserSchema.js";
import Response from "../utils/Response.js";
import connectToMongo from "../utils/connectToMongo.js";

async function crateLocalUser(req, res) {
  if (req.body.username && req.body.password && req.body.email) {
    let db = await connectToMongo();
    if (db.status == 1) {
      let existingUser = await LocalUser.find({
        $or: [{ email }, { username }],
      });
      if (existingUser.length == 0) {
        let { username, password, email } = req.body;
        let newUser = await LocalUser.create({
          email,
          username,
          password: bcrypt.hash(password),
        });
        if (newUser._id) {
          res.json(new Response(200, "User Created", {}))
        } else {
          res.json(new Response(200, "Something Went Wrong", {}))
        }
      } else {
        res.json(new Response(400, "Duplicate Entry Kindly Change Username or Email"))
      }
    } else {
      res.json(new Response(500, "Database Connection Error", { error: db }))
    }
  }
}

export { crateLocalUser };
