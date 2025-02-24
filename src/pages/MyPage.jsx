import React from "react";
import FormInput from "../components/form/FormInput";
import FormContainer from "../components/form/FormContainer";
import Button from "../components/Button";
import useForm from "../libs/hooks/useForm";
import { updateProfile } from "../libs/api/auth";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const MyPage = () => {
  const accessToken = localStorage.getItem("accessToken");
  const [userNickname, setUserNickname] = useState("");

  useEffect(() => {
    const func = async () => {
      const response = await axios.get(
        `https://www.nbcamp-react-auth.link/user`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      setUserNickname(response.data.nickname);
    };
    func();
  }, []);

  const { formState, onChangeHandler } = useForm({
    nickname: "",
  });

  const { nickname } = formState;

  const updateProfileHandler = async (e) => {
    e.preventDefault();

    await updateProfile(formState);

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
