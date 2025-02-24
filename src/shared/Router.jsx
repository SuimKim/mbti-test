import React from "react";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import HomePage from "../pages/HomePage";
import MyPage from "../pages/MyPage";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import TestPage from "../pages/TestPage";
import TestResultPage from "../pages/TestResultPage";
import Header from "../components/layouts/Header";
import { useSelector } from "react-redux";

const PublicRoute = () => {
  const isLogin = useSelector((state) => state.auth.isLogin);
  return <>{isLogin ? <Navigate to="/" /> : <Outlet />}</>;
};
const PrivateRoute = () => {
  const isLogin = useSelector((state) => state.auth.isLogin);
  return <>{isLogin ? <Outlet /> : <Navigate to="/sign-in" />}</>;
};

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element={<PublicRoute />}>
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/test" element={<TestPage />} />
          <Route path="/results" element={<TestResultPage />} />
          <Route path="/my-page" element={<MyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
