import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const isLogin = true;

  return (
    <div className="flex justify-between p-[20px] border-b-2 border-black">
      <div className="hover:cursor-pointer hover:text-white">
        <Link to={"/"}>홈</Link>
      </div>
      <div className="flex gap-5">
        <Link to={"/my-page"} className="hover:cursor-pointer hover:text-white">
          프로필
        </Link>
        <Link to={"/test"} className="hover:cursor-pointer hover:text-white">
          테스트
        </Link>
        <Link
          to={"/test-result"}
          className="hover:cursor-pointer hover:text-white"
        >
          결과보기
        </Link>
        <Link to={"/sign-in"} className="hover:cursor-pointer hover:text-white">
          {!isLogin ? "로그인" : "로그아웃"}
        </Link>
      </div>
    </div>
  );
};

export default Header;
