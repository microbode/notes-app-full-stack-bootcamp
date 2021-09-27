import axios from "axios";
import { baseDomain } from "../constants";

const baseUrl = `${baseDomain}/api/notes`;

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const create = (newObject, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const request = axios.post(baseUrl, newObject, config);
  return request.then((response) => response.data);
};

const update = (id, newObject, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const request = axios.put(`${baseUrl}/${id}`, newObject, config);
  return request.then((response) => response.data);
};

export default { getAll, create, update };
