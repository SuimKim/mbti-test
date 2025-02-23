import React from "react";
import { Link } from "react-router-dom";
import FormInput from "../components/form/FormInput";
import FormContainer from "../components/form/FormContainer";
import Button from "../components/Button";

const SignInPage = () => {
  return (
    <FormContainer titleLabel="로그인">
      <FormInput placeholder="아이디" inputType="text" />
      <FormInput placeholder="비밀번호" inputType="password" />
      <Button label="로그인" />
      <p className="mt-5 text-gray-600">
        계정이 없으신가요?{" "}
        <Link to={"/sign-up"} className="text-red-400 hover:underline">
          회원가입
        </Link>
      </p>
    </FormContainer>
  );
};

export default SignInPage;
