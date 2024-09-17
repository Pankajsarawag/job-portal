import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 10000, // Try connecting for 5 seconds
      socketTimeoutMS: 45000,
    });
    console.log("mongoDB connected successfully");
  } catch (err) {
    console.log(err.message);
  }
};

export default connectDB;
