import axios from "axios";

import { storage } from "../utils/storage";
import { API_URL, TOKEN_TYPE } from "../utils/constants";
import { safeApiCall } from "../utils/requestWrapper";

export const getCurrentUser = async () => {
  const token = storage.getToken();
  if (!token) return null;

  const fetchProfile = () =>
    axios.get(`${API_URL}/profile`, {
      headers: { Authorization: `${TOKEN_TYPE} ${token}` },
    });

  const { data, error } = await safeApiCall(fetchProfile);

  if (error) throw new Error(error.message);

  return data;
};
