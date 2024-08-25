import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRoute from "./routers/userRoutes.js";

dotenv.config({});

const app = express();
const PORT = process.env.PORT || 3000;

//middleware to parse the data in json format
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
import connectDB from "./utils/db.js";

const corsOption = {
  origin: "http//localhost:5173",
  credentials: true,
};
app.use(cors(corsOption));

app.use("/api/v1/user", userRoute);

app.listen(PORT, () => {
  connectDB();

  console.log(`Server listening on Port ${PORT}`);
});
