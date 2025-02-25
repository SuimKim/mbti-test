import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: !!sessionStorage.getItem("accessToken"),
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
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
