import mongoose from "mongoose";

const companySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    description: {
      type: String,
    },

    website: {
      type: String,
      required: true,
    },

    location: {
      type: String,
    },

    logo: {
      type: String, //url to company logo
      required: true,
    },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: ture,
    },
  },
  { timestamps: true }
);

export const Company = mongoose.model("Company", companySchema);
