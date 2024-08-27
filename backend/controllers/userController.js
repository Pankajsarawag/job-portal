import { User } from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const SECRET_KEY = process.env.SECRET_KEY || "yourSecretKey";

export const register = async (req, res) => {
  //check any filled is empty
  try {
    const { fullname, email, phoneNumber, password, role } = req.body;
    const file = req.file;

    console.log(req.body);
    if (!fullname || !email || !phoneNumber || !password || !role) {
      return res.status(400).json({
        message: "No field can be empty!",
        success: false,
      });
    }

    // check if user exist with the the email.
    let user = await User.find({ email: email });

    if (user)
      return res.status(400).json({
        message: "User already exist with this email!",
        success: false,
      });

    //hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    //create user - register user
    try {
      newUser = await User.create({
        fullname,
        email,
        phoneNumber,
        password: hashedPassword,
        role,
      });

      newUser.password = undefined;

      console.log("User registered successfully");
      res.status(201).json({
        message: "registered successfully",
        user: newUser,
        success: true,
      });
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    console.log(err);
  }
};

//generate token
const generateToken = (userId) => {
  const token = jwt.sign({ userId: userId }, SECRET_KEY, { expiresIn: "1d" });
  return token;
};

//login function
export const login = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    //if all the fileds are filled
    if (!email || !password || !role) {
      return res.status(400).json({
        message: "all the fields are required",
        success: false,
      });
    }

    //fetch user from database if exist
    const user = await User.findOne({ email: email }).select("+password");

    if (!user)
      return res.status(404).json({
        message: "Incorrect email or password",
        status: false,
      });

    //match the hashed password and curr password
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch)
      return res.status(404).json({
        message: "incorrect password or role",
      });

    //if the role mentioned is correct or not
    if (user.role != role)
      return res.status(404).json({
        message: "incorrect credentials!",
        status: false,
      });

    //generate token
    const token = generateToken(user._id);

    user.password = undefined;
    //send response to server
    res
      .status(200)
      .cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict",
      })
      .json({
        user: user,
        message: `Welcome back ${user.fullname}`,
        success: true,
      });
  } catch (err) {
    console.log(err);
  }
};

// logout
export const logout = async (req, res) => {
  try {
    return res.status(200).cookie("token", "", { maxAge: 0 }).json({
      message: "logged out successfully",
      success: true,
    });
  } catch (err) {
    console.log(err);
  }
};

//update profile
export const updateProfile = async (req, res) => {
  try {
    const { fullname, phoneNumber, bio, skills } = req.body;
    const file = req.file;

    //cloudinary
    let skillsarray = [];
    //change skills string in array
    if (skills) skillsarray = skills.split(",");

    const userId = req.id; //middleware authentication

    let user = await User.findById(userId);

    if (!user) {
      return res.status(400).json({
        message: "user not found",
        success: false,
      });
    }

    if (fullname) user.fullname = fullname;
    if (phoneNumber) user.phoneNumber = phoneNumber;
    if (bio) user.profile.bio = bio;
    if (skillsarray) user.profile.Skill = skillsarray;

    await user.save();

    res.status(200).json({
      message: "profile updated successfully",
      success: true,
      user: user,
    });
  } catch (err) {
    console.log(err);
  }
};
