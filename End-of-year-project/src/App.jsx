import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Verify from "./pages/Verify";
import UploadCertificate from "./pages/UploadCertificate";

import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/verify" element={<Verify />} />

        <Route
          path="/upload"
          element={<UploadCertificate />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;