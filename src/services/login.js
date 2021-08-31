import axios from "axios";
const baseUrl = "http://localhost:3001/api/login";

export const login = async (userData, setError) => {
  try {
    const request = await axios.post(baseUrl, userData);
    return request.data;
  } catch (error) {
    setError(error.response.data.error);
  }
};
