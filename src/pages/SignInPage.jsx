import React from "react";
import { Link, useNavigate } from "react-router-dom";
import FormInput from "../components/form/FormInput";
import FormContainer from "../components/form/FormContainer";
import Button from "../components/Button";
import useForm from "../libs/hooks/useForm";
import { signIn } from "../libs/api/auth";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";

const SignInPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { formState, onChangeHandler } = useForm({
    id: "",
    password: "",
  });

  const { id, password } = formState;

  const signInHandler = async (e) => {
    e.preventDefault();

    const { accessToken } = await signIn(formState);

    alert("로그인이 완료되었습니다.");
    localStorage.setItem("accessToken", accessToken);
    dispatch(login());
    navigate("/");

    navigate("/");
  };

  return (
    <FormContainer titleLabel="로그인" onSubmit={signInHandler}>
      <FormInput
        placeholder="아이디"
        inputType="text"
        name="id"
        value={id}
        onChange={onChangeHandler}
      />
      <FormInput
        placeholder="비밀번호"
        inputType="password"
        name="password"
        value={password}
        onChange={onChangeHandler}
      />
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
