import { Company } from "../models/companyModel.js";
import cloudinary from "../utils/cloudinary.js";
import getDataUri from "../utils/datauri.js";

// register company
export const registerCompany = async (req, res) => {
  try {
    //fetch name and logo
    const { companyName, logo } = req.body;

    //check if both the fields are non-empty
    if (!companyName)
      return res.status(400).json({
        Message: "Please add the required fields.",
        success: false,
      });

    //check company already exist
    let company = await Company.findOne({ name: companyName });

    if (company)
      return res.status(400).json({
        message: "Company already exist with this name!",
        success: false,
      });

    //create and register company
    company = await Company.create({
      name: companyName,
      // logo: logo,
      userId: req.id,
    });

    console.log(company);

    //send to the client side
    res.status(201).json({
      company,
      message: "company registered successfully!",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

//get companies registered a recruiter
export const getCompany = async (req, res) => {
  try {
    const userId = req.id; //logged in user
    const companies = await Company.find({ userId });

    if (!companies) {
      return res.status(404).json({
        message: "No company found!",
        success: false,
      });
    }

    res.status(200).json({
      companies,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

//get company by id
export const getCompanybyId = async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);

    if (!company) {
      return res.status(404).json({
        message: "company not found.",
        success: false,
      });
    }

    console.log(company);
    res.status(200).json({
      company,
      message: "successfully fetched.",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

//update company info
export const updateCompany = async (req, res) => {
  try {
    const companyId = req.params.id;
    const { name, description, website, location } = req.body;
    const file = req.file;

    //cloudinary
    const fileURI = getDataUri(file);

    const cloudResponse = await cloudinary.uploader.upload(fileURI.content);
    const logo = cloudResponse.secure_url;
    const updateData = {
      name,
      description,
      website,
      location,
      logo,
    };
    const company = await Company.findByIdAndUpdate(companyId, updateData, {
      new: true,
    });

    if (!company)
      return res.status(404).json({
        message: "company not found",
        success: false,
      });

    res.status(201).json({
      message: "company details updated successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
