import express from "express";
import isAuthenticated from "../middlewares/isAuthenticate.js";
import {
  getCompany,
  getCompanybyId,
  registerCompany,
  updateCompany,
} from "../controllers/companyController.js";
import checkRole from "../middlewares/CheckRole.js";

const router = express.Router();

router
  .route("/register")
  .post(isAuthenticated, checkRole("recruiter"), registerCompany);

router.route("/all").get(isAuthenticated, checkRole("recruiter"), getCompany);

router.route("/:id").get(isAuthenticated, getCompanybyId);

router
  .route("/:id")
  .patch(isAuthenticated, checkRole("recruiter"), updateCompany);

export default router;
