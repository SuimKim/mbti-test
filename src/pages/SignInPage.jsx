import React from "react";
import Header from "../components/layouts/Header";
import { Link } from "react-router-dom";

const SignInPage = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center mt-5">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
          <h1 className="text-3xl font-bold text-primary-color mb-6">로그인</h1>
          <form className="space-y-6 bg-gray-50 p-6 rounded-lg shadow-md">
            <input
              type="text"
              placeholder="아이디"
              className="w-full p-4 border border-gray-300 rounded-lg"
            />
            <input
              type="password"
              placeholder="비밀번호"
              className="w-full p-4 border border-gray-300 rounded-lg"
            />
            <button className="w-full bg-red-400 text-white py-3 rounded-lg hover:bg-red-200 transition duration-300 hover:text-[#FF5A5F]">
              로그인
            </button>
          </form>
          <p className="mt-5 text-gray-600">
            계정이 없으신가요?{" "}
            <Link to={"/sign-up"} className="text-red-400 hover:underline">
              회원가입
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignInPage;
