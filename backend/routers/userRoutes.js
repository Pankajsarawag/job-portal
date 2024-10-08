import express from "express";

import {
  register,
  login,
  updateProfile,
  logout,
} from "../controllers/userController.js";

import { upload } from "../middlewares/multer.js";

import isAuthenticated from "../middlewares/isAuthenticate.js";

const router = express.Router();

router.route("/register").post(upload.single("file"), register);

router.route("/login").post(login);

router
  .route("/profile/update")
  .put(isAuthenticated, upload.single("file"), updateProfile);

router.route("/logout").get(logout);

export default router;
