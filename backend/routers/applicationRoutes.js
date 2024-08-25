import express from "express";
import {
  applyJob,
  getAppliedJob,
  getJobApplicants,
  updateStatus,
} from "../controllers/applicationController.js";
import checkRole from "../middlewares/CheckRole.js";
import isAuthenticated from "../middlewares/isAuthenticate.js";

const router = express.Router();

router.route("/applied").get(isAuthenticated, checkRole("user"), getAppliedJob);
router.route("/apply/:id").post(isAuthenticated, checkRole("user"), applyJob);
router
  .route("/applicants/:id")
  .get(isAuthenticated, checkRole("recruiter"), getJobApplicants);
router.route("/:id").patch(isAuthenticated, checkRole("user"), updateStatus);

export default router;
