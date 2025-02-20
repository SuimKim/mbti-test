import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "@pages/HomePage";
import MyPage from "@pages/MyPage";
import SignInPage from "@pages/SignInPage";
import SignUpPage from "@pages/SignUpPage";
import TestPage from "@pages/TestPage";
import TestResultPage from "@pages/TestResultPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/my-page" element={<MyPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/test-result" element={<TestResultPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
