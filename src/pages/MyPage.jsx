import React from "react";
import FormInput from "../components/form/FormInput";
import FormContainer from "../components/form/FormContainer";
import Button from "../components/Button";
import useForm from "../libs/hooks/useForm";
import { updateProfile } from "../libs/api/auth";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateNickname } from "../redux/authSlice";

const MyPage = () => {
  const userNickname = useSelector((state) => state.auth.nickname);
  const dispatch = useDispatch();

  const { formState, onChangeHandler, resetForm } = useForm({
    nickname: "",
  });

  const { nickname } = formState;

  const updateProfileHandler = async (e) => {
    e.preventDefault();

    await updateProfile(formState);
    dispatch(updateNickname(nickname));
    resetForm();

    alert("수정 완료");
  };

  return (
    <FormContainer titleLabel="프로필 수정" onSubmit={updateProfileHandler}>
      <p>{userNickname}</p>
      <FormInput
        placeholder="닉네임"
        inputType="text"
        name="nickname"
        value={nickname}
        onChange={onChangeHandler}
      />
      <Button label="수정하기" />
    </FormContainer>
  );
};

export default MyPage;
