import express from "express";

import {
  register,
  login,
  updateProfile,
  logout,
} from "../controllers/userController.js";

import isAuthenticated from "../middlewares/isAuthenticate.js";

const router = express.Router();

router.route("/register").post(register);

router.route("/login").post(login);

router.route("/profile/update").patch(isAuthenticated, updateProfile);

router.route("/logout").get(isAuthenticated, logout);

export default router;
