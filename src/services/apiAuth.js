import axios from "axios";

import { storage } from "../utils/storage";
import { API_URL, TOKEN_TYPE } from "../utils/constants";
import { safeApiCall } from "../utils/requestWrapper";

export const useLogin = async () => {
  const fetchProfile = () => axios.get(`${API_URL}/auth/login`);

  const { data, error } = await safeApiCall(fetchProfile);

  if (error) throw new Error(error.message);

  return data;
};

export const getCurrentUser = async (id) => {
  const token = storage.getToken();
  if (!token) return null;

  const fetchProfile = () =>
    axios.get(`${API_URL}/${id}/profile`, {
      headers: { Authorization: `${TOKEN_TYPE} ${token}` },
    });

  const { data, error } = await safeApiCall(fetchProfile);

  if (error) throw new Error(error.message);

  return data;
};
