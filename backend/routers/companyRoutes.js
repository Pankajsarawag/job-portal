import express from "express";
import isAuthenticated from "../middlewares/isAuthenticate.js";
import {
  getCompany,
  getCompanybyId,
  registerCompany,
  updateCompany,
} from "../controllers/companyController.js";
import checkRole from "../middlewares/CheckRole.js";

import { upload } from "../middlewares/multer.js";

const router = express.Router();

router
  .route("/register")
  .post(isAuthenticated, checkRole("recruiter"), registerCompany);

router.route("/").get(isAuthenticated, checkRole("recruiter"), getCompany);

router.route("/:id").get(isAuthenticated, getCompanybyId);

router
  .route("/:id")
  .patch(
    isAuthenticated,
    checkRole("recruiter"),
    upload.single("file"),
    updateCompany
  );

export default router;
