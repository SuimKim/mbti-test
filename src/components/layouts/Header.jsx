import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../redux/authSlice";

const Header = () => {
  const isLogin = useSelector((state) => state.auth.isLogin);
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between p-[20px] border-b-2 border-black">
      <div className="hover:cursor-pointer hover:text-white">
        <Link to={"/"}>홈</Link>
      </div>
      {!isLogin ? (
        <div className="flex gap-5">
          <Link
            to={"/sign-in"}
            className="hover:cursor-pointer hover:text-white"
          >
            로그인
          </Link>
        </div>
      ) : (
        <div className="flex gap-5">
          <Link
            to={"/my-page"}
            className="hover:cursor-pointer hover:text-white"
          >
            프로필
          </Link>
          <Link to={"/test"} className="hover:cursor-pointer hover:text-white">
            테스트
          </Link>
          <Link
            to={"/results"}
            className="hover:cursor-pointer hover:text-white"
          >
            결과보기
          </Link>
          <Link
            to={"/"}
            className="hover:cursor-pointer hover:text-white"
            onClick={() => {
              dispatch(logout());
            }}
          >
            로그아웃
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
