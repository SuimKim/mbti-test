import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "@pages/HomePage";
import MyPage from "@pages/MyPage";
import SignInPage from "@pages/SignInPage";
import SignUpPage from "@pages/SignUpPage";
import TestPage from "@pages/TestPage";
import TestResultPage from "@pages/TestResultPage";
import Header from "../components/layouts/Header";
import { useSelector } from "react-redux";

const PublicRoute = () => {
  const isLogin = useSelector((state) => state.auth.isLogin);
  console.log("isLogin", isLogin);
  return <>{isLogin ? <Navigate to="/" /> : <Outlet />}</>;
};

// 로그인이 되어있어야만 접근할 수 있는 페이지
const PrivateRoute = () => {
  const isLogin = useSelector((state) => state.auth.isLogin);
  return <>{isLogin ? <Outlet /> : <Navigate to="/sign-in" />}</>;
};

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />

        <Route path="/" element={<HomePage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/results" element={<TestResultPage />} />
        <Route path="/my-page" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
