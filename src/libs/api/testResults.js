import axios from "axios";

const testApi = axios.create({
  baseURL: "https://truth-wealthy-postage.glitch.me/testResults",
});

export const getTestResults = async () => {
  try {
    const response = await testApi.get();
    return response.data;
  } catch (error) {
    alert("오류가 발생했습니다. 다시 접속해주세요.");
  }
};

export const createTestResult = async (resultData) => {
  try {
    const response = await testApi.post("", resultData);
    return response.data;
  } catch (error) {
    alert("오류가 발생했습니다. 다시 시도해주세요.");
  }
};

export const deleteTestResult = async (id) => {
  try {
    const response = await testApi.delete(`/${id}`);
    return response.data;
  } catch (error) {
    alert("오류가 발생했습니다. 다시 시도해주세요.");
  }
};

export const updateTestResultVisibility = async (resultItem) => {
  try {
    const response = await testApi.patch(`/${resultItem.id}`, {
      visibility: !resultItem.visibility,
    });
    return response.data;
  } catch (error) {
    alert("오류가 발생했습니다. 다시 시도해주세요.");
  }
};
