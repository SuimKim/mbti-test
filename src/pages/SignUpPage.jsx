import React from "react";
import { Link } from "react-router-dom";
import FormInput from "../components/form/FormInput";
import FormContainer from "../components/form/FormContainer";
import Button from "../components/Button";

const SignUpPage = () => {
  return (
    <FormContainer titleLabel="회원가입">
      <FormInput placeholder="아이디" inputType="text" />
      <FormInput placeholder="비밀번호" inputType="password" />
      <FormInput placeholder="닉네임" inputType="text" />
      <Button label="가입하기" />
      <p className="mt-5 text-gray-600">
        이미 계정이 있으신가요?{" "}
        <Link to={"/sign-in"} className="text-red-400 hover:underline">
          로그인
        </Link>
      </p>
    </FormContainer>
  );
};

export default SignUpPage;
