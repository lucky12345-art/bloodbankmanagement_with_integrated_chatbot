import axios from "axios";

const api = axios.create({
  baseURL: "https://bloodbankmanagement-with-integrated.onrender.com",
});

export default api; 