import { Job } from "../models/jobModel.js";

//post job
export const postJob = async (req, res) => {
  try {
    const isEmpty = (value) => {
      if (typeof value === "string") return value.trim() === "";

      return value === null || value === undefined;
    };

    const {
      title,
      description,
      requirements,
      salary,
      location,
      experienceLevel,
      jobType,
      position,
      companyId,
    } = req.body;

    const created_by = req.id;

    const fields = {
      title,
      description,
      requirements,
      salary,
      location,
      experienceLevel,
      jobType,
      position,
      companyId,
      created_by,
    };

    //check if any field is empty or not
    const emptyFields = Object.keys(fields).filter((key) =>
      isEmpty(fields[key])
    );

    if (emptyFields.length > 0) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const job = await Job.create(fields);

    res.status(201).json({
      message: "New job created successfully",
      job,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

//jobs for the users
export const getAllJobs = async (req, res) => {
  try {
    const keyword = req.query.keyword || "";
    console.log(req.query.keyword);

    //query to filter jobs
    const query = {
      $or: [
        { title: { $regex: keyword, $options: "i" } },
        { description: { $regex: keyword, $options: "i" } },
      ],
    };

    const jobs = await Job.find(query)
      .populate({ path: "companyId" })
      .sort({ createdAt: -1 });

    if (!jobs)
      return res.status(404).json({ message: "No Job found", success: true });

    res.status(200).json({
      jobs,
      success: true,
    });
  } catch (error) {}
};

//get job by id
export const getJobById = async (req, res) => {
  try {
    const jobId = req.params.id;
    const job = await Job.findById(jobId)
      .populate("applications")
      .populate("companyId");

    if (!job)
      return res.status(404).json({
        message: "Job not found!",
        success: true,
      });

    res.status(200).json({
      job,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

//get jobs posted by recruiter
export const getRecJobs = async (req, res) => {
  try {
    const userId = req.id;

    const jobs = await Job.find({ created_by: userId }).populate({
      path: "companyId",
    });
    if (!jobs)
      return res.status(404).json({
        message: "No job found!",
        success: false,
      });

    res.status(200).json({
      jobs,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
