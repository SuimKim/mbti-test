import React from "react";
import FormInput from "../components/form/FormInput";
import FormContainer from "../components/form/FormContainer";
import Button from "../components/Button";

const MyPage = () => {
  return (
    <FormContainer titleLabel="프로필 수정">
      <FormInput placeholder="닉네임" inputType="text" />
      <Button label="수정하기" />
    </FormContainer>
  );
};

export default MyPage;
