import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import certificateRoutes from "./routes/certificateRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/uploads", express.static("uploads"));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB:", err);
  });

app.use("/api/certificates", certificateRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});