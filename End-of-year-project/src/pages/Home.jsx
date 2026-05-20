import { useNavigate } from "react-router-dom";
import "../assets/home.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home container">
      <h1>AI Certificate Verification System</h1>
      <p>Upload or scan certificates to verify authenticity using AI</p>

      <button onClick={() => navigate("/verify")}>
        Verify Certificate
      </button>
    </div>
  );
}