import React from "react";

const Button = ({ label }) => {
  return (
    <button className="w-full bg-red-400 text-white py-3 rounded-lg hover:bg-red-200 transition duration-300 hover:text-[#FF5A5F]">
      {label}
    </button>
  );
};

export default Button;
