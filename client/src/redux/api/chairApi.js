import { axiosInstance as api } from "./axiosInstance";
import { handleApiError } from "./utils";

export const getRequest = async () => {
  api.defaults.withCredentials = true;
  try {
    const response = await api.get("/api/chair/get-request-accounts");
    return {
      error: null,
      data: response.data,
    };
  } catch (error) {
    return handleApiError(error);
  }
};

export const declineRequest = async (formData) => {
  try {
    const response = await api.post("/api/chair/reject-accounts", {
      userID: formData.get("userID"),
      id: formData.get("id"),
    });
    return {
      error: null,
      data: response.data,
    };
  } catch (error) {
    return handleApiError(error);
  }
};

export const acceptRequest = async (formData) => {
  try {
    const response = await api.post("/api/chair/accept-accounts", {
      userID: formData.get("userID"),
      id: formData.get("id"),
    });
    return {
      error: null,
      data: response.data,
    };
  } catch (error) {
    console.error(error);
    return handleApiError(error);
  }
};
