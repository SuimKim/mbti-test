import React from "react";
import ResultItem from "../components/ResultItem";

const TestResultPage = () => {
  return (
    <div className="flex flex-col items-center justify-center m-10 ">
      <div className="bg-white p-8 w-full flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-6">MBTI 테스트</h1>
        <ResultItem />
      </div>
    </div>
  );
};

export default TestResultPage;
