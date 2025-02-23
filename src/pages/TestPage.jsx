import React from "react";
import { questions } from "../data/questions";
import TestItem from "../components/TestItem";
import Button from "../components/Button";

const TestPage = () => {
  const test = questions;
  console.log("test", test);
  return (
    <div className="flex flex-col items-center justify-center m-10 ">
      <div className="bg-white p-8 w-full flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-6">MBTI 테스트</h1>
        <div className="bg-white w-full max-w-sm">
          {test.map((item) => (
            <TestItem item={item} />
          ))}
          <Button label="제출하기" />
        </div>
      </div>
    </div>
  );
};

export default TestPage;
