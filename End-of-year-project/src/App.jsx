import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Verify from "./pages/Verify";

import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/verify" element={<Verify />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;