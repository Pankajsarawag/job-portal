import jwt from "jsonwebtoken";
import { User } from "../models/userModel.js";

const SECRET_KEY = process.env.SECRET_KEY || "yourSecretKey";

//user logged in or not
const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token)
      return res.status(401).json({
        message: "user not authenticated",
        success: true,
      });

    const decode = await jwt.verify(token, SECRET_KEY);
    if (!decode) {
      return res.status(401).json({
        message: "invalid token",
        success: true,
      });
    }

    req.id = decode.userId;
    req.user = await User.findById(req.id);

    next();
  } catch (err) {
    console.log(err);
  }
};

export default isAuthenticated;
