import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: !!sessionStorage.getItem("accessToken"),
  nickname: sessionStorage.getItem("userNickname"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLogin = true;
      state.nickname = action.payload;
    },
    logout: (state) => {
      state.isLogin = false;
      sessionStorage.clear();
    },
    updateNickname: (state, action) => {
      state.nickname = action.payload;
    },
  },
});

export const { login, logout, updateNickname } = authSlice.actions;
export default authSlice.reducer;
