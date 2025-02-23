import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between p-[20px] border-b-2 border-black ">
      <span className="hover:cursor-pointer hover:text-white">홈</span>
      <span className="hover:cursor-pointer hover:text-white">로그인</span>
    </div>
  );
};

export default Header;
