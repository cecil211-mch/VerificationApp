import { useState } from "react";
import { verifyCertificate } from "../services/api";

import UploadBox from "../components/UploadBox";
import Loader from "../components/Loader";
import ResultCard from "../components/ResultCard";
import "../assets/verify.css";

export default function Verify() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleVerify = async () => {
    if (!file) return;

    setLoading(true);
    setResult(null);

    try {
      const res = await verifyCertificate(file);
      setResult(res.data);
    } catch (err) {
      setResult({ status: "ERROR" });
    }

    setLoading(false);
  };

  return (
    <div className="verify-container container">
      <h2>Verify Certificate</h2>

      <UploadBox setFile={setFile} />

      <button onClick={handleVerify}>
        Verify Certificate
      </button>

      {loading && <Loader />}

      <ResultCard result={result} />
    </div>
  );
}