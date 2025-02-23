import React from "react";

const MainCard = ({ title, content }) => {
  return (
    <div className="p-4 bg-white shadow-lg rounded-lg text-left">
      <h2 className="text-lg">{title}</h2>
      <hr className="mb-2 mt-2 border-black" />
      <p className="text-sm">{content}</p>
    </div>
  );
};

export default MainCard;
