import { Link } from "react-router-dom";
import "../assets/navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <h2>CertVerify AI</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/verify">Verify</Link>
      </div>
    </div>
  );
}