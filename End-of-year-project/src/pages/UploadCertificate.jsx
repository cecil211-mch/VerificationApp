import { useState } from "react";
import axios from "axios";

function UploadCertificate() {
  const [formData, setFormData] = useState({
    studentName: "",
    matricule: "",
    institution: "",
    certificateNumber: "",
    issueDate: "",
  });

  const [certificate, setCertificate] = useState(null);

  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle file selection
  const handleFileChange = (e) => {
    setCertificate(e.target.files[0]);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if file exists
    if (!certificate) {
      setMessage("Please select a certificate file");
      return;
    }

    setLoading(true);

    const data = new FormData();

    // Append text fields
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    // Append file
    data.append("certificate", certificate);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/certificates/upload-certificate",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data);

      setMessage(response.data.message);

      // Reset form
      setFormData({
        studentName: "",
        matricule: "",
        institution: "",
        certificateNumber: "",
        issueDate: "",
      });

      setCertificate(null);

    } catch (error) {
      console.log("UPLOAD ERROR:", error);

      if (error.response) {
        console.log(error.response.data);

        setMessage(
          error.response.data.message || "Upload failed"
        );
      } else {
        setMessage("Server not responding");
      }

    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={{ textAlign: "center" }}>
          Upload Certificate
        </h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="studentName"
            placeholder="Student Name"
            value={formData.studentName}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <input
            type="text"
            name="matricule"
            placeholder="Matricule"
            value={formData.matricule}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <input
            type="text"
            name="institution"
            placeholder="Institution"
            value={formData.institution}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <input
            type="text"
            name="certificateNumber"
            placeholder="Certificate Number"
            value={formData.certificateNumber}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <input
            type="date"
            name="issueDate"
            value={formData.issueDate}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <input
            type="file"
            onChange={handleFileChange}
            accept=".jpg,.jpeg,.png,.pdf"
            required
            style={inputStyle}
          />

          <button
            type="submit"
            style={buttonStyle}
            disabled={loading}
          >
            {loading ? "Uploading..." : "Upload"}
          </button>

        </form>

        {message && (
          <p
            style={{
              textAlign: "center",
              marginTop: "15px",
              color:
                message.toLowerCase().includes("success")
                  ? "green"
                  : "red",
            }}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

// Styles

const containerStyle = {
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "#f4f4f4",
};

const cardStyle = {
  width: "400px",
  background: "white",
  padding: "30px",
  borderRadius: "10px",
  boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
};

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginTop: "10px",
  borderRadius: "5px",
  border: "1px solid #ccc",
  boxSizing: "border-box",
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  marginTop: "20px",
  border: "none",
  background: "#007bff",
  color: "white",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px",
};

export default UploadCertificate;