import axios from "axios";
import store from "../../redux/configStore";
import { logout } from "../../redux/authSlice";

const authApi = axios.create({
  baseURL: "https://www.nbcamp-react-auth.link",
});

authApi.interceptors.response.use(
  (response) => response,
  (err) => {
    alert(err.response.data.message);
    if (
      err.response.data.message ===
      "토큰이 만료되었습니다. 다시 로그인 해주세요."
    ) {
      return store.dispatch(logout());
    }
    return Promise.reject(err);
  }
);

export const register = async (userData) => {
  try {
    const response = await authApi.post(`/register`, userData);
    return response.data;
  } catch (error) {
    alert("오류가 발생했습니다. 다시 시도해주세요.");
    console.log("error", error);
  }
};

export const signIn = async (userData) => {
  try {
    const response = await authApi.post(`/login`, userData);
    return response.data;
  } catch (error) {
    alert("오류가 발생했습니다. 다시 시도해주세요.");
    console.log("error", error);
  }
};

export const getUserProfile = async () => {
  try {
    const accessToken = sessionStorage.getItem("accessToken");
    const response = await authApi.get(`/user`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};

export const updateProfile = async (formData) => {
  try {
    const accessToken = sessionStorage.getItem("accessToken");
    const response = await authApi.patch(`/profile`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    alert("오류가 발생했습니다. 다시 시도해주세요.");
    console.log("error", error);
  }
};
