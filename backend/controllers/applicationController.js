import { Application } from "../models/applicationModel.js";
import { Job } from "../models/jobModel.js";

//apply for job
export const applyJob = async (req, res) => {
  try {
    const userId = req.id;
    const jobId = req.params.id;

    if (!jobId) {
      res.status(400).json({
        message: "job Is required",
        success: true,
      });
    }

    const isApplied = await Application.findOne({
      job: jobId,
      applicant: userId,
    });
    if (isApplied)
      res.status(400).json({
        message: "You have already applied for this jobs",
        success: false,
      });

    //check job exist or not
    const job = await Job.findById(jobId);
    if (!job)
      res.status(404).status({
        message: "Job not found",
        success: false,
      });

    //create new application
    const newApplication = await Application.create({
      job: jobId,
      applicant: userId,
    });

    if (newApplication) console.log(newApplication);

    //add in job applicants
    job.applications.push(newApplication._id);
    await job.save();

    //response
    res.status(200).json({
      message: "applied successfully",
      success: true,
      job,
    });
  } catch (error) {
    console.log(error);
  }
};

//get all the jobs applied by the user
export const getAppliedJob = async (req, res) => {
  try {
    //get the applications if exist (nest populate is used)
    const applications = await Application.find({ applicant: req.id })
      .sort({ createdAt: -1 })
      .populate({
        path: "job",
        options: { sort: { createdAt: -1 } },
        populate: {
          path: "companyId",
        },
      });

    if (!applications)
      res.status(404).json({
        message: "No application",
        success: false,
      });

    //send to the client
    return res.status(200).json({
      applications,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

//get applicants for the particular job
export const getJobApplicants = async (req, res) => {
  try {
    const jobId = req.params.id;

    // console.log(jobId);

    //find jobApplicant
    const jobApplicants = await Application.find({ job: jobId })
      .populate({ path: "job" })
      .populate({
        path: "applicant",
        options: { sort: { createdAt: -1 } },
      });

    // console.log(jobApplicants);
    if (!jobApplicants)
      res.status(404).json({
        message: "No applicant found",
        success: false,
      });

    res.status(200).json({
      jobApplicants,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

//update the Status of the applicant - using applicantion Id
export const updateStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const applicationId = req.params.id;

    if (!status)
      return res.status(400).json({
        message: "Status is required",
        success: false,
      });

    //find the application
    const application = await Application.findByIdAndUpdate(
      applicationId,
      {
        status,
      },
      { new: true }
    );

    if (!application)
      res.status(404).json({
        message: "Application not found",
        success: false,
      });

    res.status(200).json({
      message: "Status updated successfully",
      application,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
