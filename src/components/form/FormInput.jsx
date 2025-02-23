import React from "react";

const FormInput = ({ inputType, placeholder }) => {
  return (
    <input
      type={inputType}
      placeholder={placeholder}
      className="w-full p-4 border border-gray-300 rounded-lg"
    />
  );
};

export default FormInput;
