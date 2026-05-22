import express from "express";
import multer from "multer";
import Certificate from "../models/certificates.js";
const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },

  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post(
  "/upload-certificate",
  upload.single("certificate"),
  async (req, res) => {
    try {
      const {
        studentName,
        matricule,
        institution,
        certificateNumber,
        issueDate,
      } = req.body;

      const newCertificate = new Certificate({
        studentName,
        matricule,
        institution,
        certificateNumber,
        issueDate,
        uploadedFile: req.file.path,
      });

      await newCertificate.save();

      res.status(201).json({
        message: "Certificate uploaded successfully",
        data: newCertificate,
      });
    } catch (error) {
      console.log(error);

      res.status(500).json({
        message: "Server Error",
      });
    }
  }
);

export default router;