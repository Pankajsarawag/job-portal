import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.SECRET_KEY || "yourSecretKey";
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
    next();
  } catch (err) {
    console.log(err);
  }
};

export default isAuthenticated;
