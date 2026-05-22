import mongoose from "mongoose";

const certificateSchema = new mongoose.Schema({
  studentName: String,
  matricule: String,
  institution: String,
  certificateNumber: String,
  issueDate: String,
  uploadedFile: String,
  verificationStatus: {
    type: String,
    default: "Pending",
  },
}, { timestamps: true });

export default mongoose.model("Certificate", certificateSchema);