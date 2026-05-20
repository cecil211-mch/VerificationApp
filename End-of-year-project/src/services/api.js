import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const verifyCertificate = (file) => {
  const formData = new FormData();
  formData.append("file", file);

  return API.post("/verify", formData);
};