import React, { useState } from "react";
import TestForm from "../components/TestForm";
import { calculateMBTI, mbtiDescriptions } from "../libs/utils/mbtiCalculator";
import { createTestResult } from "../libs/api/testResults";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";

const TestPage = ({ user }) => {
  const [result, setResult] = useState(null);

  const handleTestSubmit = async (answers) => {
    const mbtiResult = calculateMBTI(answers);
    setResult(mbtiResult);

    await createTestResult({
      id: "유저 ID",
      nickname: "닉네임",
      result: mbtiResult,
      visibility: true,
      date: new Date().toLocaleString(),
      userId: "현재 사용자 ID",
    });
  };

  return (
    <div className="w-full flex flex-col items-center justify-center p-10">
      <div className="bg-white rounded-lg p-8 max-w-lg w-full h-full overflow-y-auto">
        {!result ? (
          <>
            <h1 className="text-3xl font-bold text-primary-color mb-6">
              MBTI 테스트
            </h1>
            <TestForm onSubmit={handleTestSubmit} />
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold text-primary-color mb-6">
              테스트 결과: {result}
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              {mbtiDescriptions[result] ||
                "해당 성격 유형에 대한 설명이 없습니다."}
            </p>
            <Link to={"/results"}>
              <Button label="결과 페이지로 이동하기" />
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default TestPage;
