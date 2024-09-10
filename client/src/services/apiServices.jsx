import axios from "axios";
const api = axios.create({ baseURL: "/api" });
export const registerDonor = (data) => api.post("/donors/register", data);
export const loginDonor = (data) => api.post("/donors/login", data);
