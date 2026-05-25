import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import certificateRoutes from "./routes/certificateRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/certificates", certificateRoutes);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((error) => {
    console.log("MongoDB Error:", error);
  });

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});