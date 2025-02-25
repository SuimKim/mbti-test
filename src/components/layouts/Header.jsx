import { useSelector } from "react-redux";
import { logout } from "../../redux/authSlice";
import store from "../../redux/configStore";
import HeaderNav from "./HeaderNav";

const Header = () => {
  const isLogin = useSelector((state) => state.auth.isLogin);

  return (
    <div className="flex justify-between p-[20px] border-b-2 border-black">
      <div className="hover:cursor-pointer hover:text-white">
        <HeaderNav path={"/"} label={"홈"} />
      </div>
      {!isLogin ? (
        <div className="flex gap-5">
          <HeaderNav path={"/sign-in"} label={"로그인"} />
        </div>
      ) : (
        <div className="flex gap-5">
          <HeaderNav path={"/my-page"} label={"프로필"} />
          <HeaderNav path={"/test"} label={"테스트"} />
          <HeaderNav path={"/results"} label={"결과보기"} />
          <HeaderNav
            path={"/"}
            label={"로그아웃"}
            onClick={() => {
              store.dispatch(logout());
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Header;
