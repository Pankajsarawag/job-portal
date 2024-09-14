import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRoute from "../routers/userRoutes.js";
import companyRoute from "../routers/companyRoutes.js";
import jobRoute from "../routers/jobRoutes.js";
import applicationRoute from "../routers/applicationRoutes.js";
dotenv.config({});

const app = express();
const PORT = process.env.PORT || 3000;

//middleware to parse the data in json format
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
import connectDB from "../utils/db.js";

const corsOption = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOption));

//API's routes
app.get("/", (req, res) => {
  res.send("Welcome to JobForge backend!");
});

app.use("/api/v1/user", userRoute);
app.use("/api/vi/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);

// app.use("/*", async (req, res) => {
//   res.status(404).json({
//     message: "route not defined",
//     success: false,
//   });
// });

app.listen(PORT, () => {
  connectDB();
  console.log(`Server listening on Port ${PORT}`);
});
