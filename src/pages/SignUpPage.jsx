import { Link, useNavigate } from "react-router-dom";
import FormInput from "../components/form/FormInput";
import FormContainer from "../components/form/FormContainer";
import useForm from "../libs/hooks/useForm";
import { register } from "../libs/api/auth";

const SignUpPage = () => {
  const navigate = useNavigate();

  const { formState, onChangeHandler } = useForm({
    id: "",
    password: "",
    nickname: "",
  });

  const { id, password, nickname } = formState;

  const signUpHandler = async (e) => {
    e.preventDefault();
    await register(formState);

    alert("회원가입이 완료되었습니다.");

    navigate("/sign-in");
  };

  return (
    <div className="flex flex-col items-center justify-center m-5">
      <FormContainer
        titleLabel="회원가입"
        onSubmit={signUpHandler}
        buttonName={"가입하기"}
      >
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
        <FormInput
          placeholder="닉네임"
          inputType="text"
          name="nickname"
          value={nickname}
          onChange={onChangeHandler}
        />
        <p className="mt-5 text-gray-600 absolute bottom-7">
          이미 등록된?{" "}
          <Link to={"/sign-in"} className="text-red-400 hover:underline">
            로그인
          </Link>
        </p>
      </FormContainer>
    </div>
  );
};

export default SignUpPage;
