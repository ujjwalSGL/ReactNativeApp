import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.fr.stg.shipglobal.in/api/v1/auth",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000,
});

interface LoginParams {
  email: string;
  password: string;
}
export const loginUser = async (credentials: LoginParams): Promise<any> => {
  try {
    const response = await apiClient.post("/login", credentials);

    if (response.data.token) {
      apiClient.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.token}`;
    }

    return response.data;
  } catch (error: any) {
    if (error.response) {
      console.error("Login Error:", error.response.data);
      throw (
        error.response.data || {
          message: `Error ${error.response.status}: ${error.response.statusText}`,
        }
      );
    } else if (error.request) {
      console.error("Network Error:", error.request);
      throw {
        message: "Network error. Please check your internet connection.",
      };
    } else {
      console.error("Error:", error.message);
      throw { message: error.message || "An unexpected error occurred" };
    }
  }
};

export const apiService = {
  loginUser,
};
