import express from "express";
import isAuthenticated from "../middlewares/isAuthenticate.js";
import {
  getAllJobs,
  getJobById,
  getRecJobs,
  postJob,
} from "../controllers/jobController.js";
import checkRole from "../middlewares/CheckRole.js";

const router = express.Router();

router
  .route("/")
  .get(isAuthenticated, getAllJobs)
  .post(isAuthenticated, checkRole("recruiter"), postJob);

router.route("/posts").get(isAuthenticated, checkRole("recruiter"), getRecJobs);
router.route("/:id").get(isAuthenticated, getJobById);

export default router;
