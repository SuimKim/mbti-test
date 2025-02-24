import React, { useState } from "react";
import TestForm from "../components/TestForm";
import { calculateMBTI, mbtiDescriptions } from "../libs/utils/mbtiCalculator";
import { createTestResult } from "../libs/api/testResults";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { useEffect } from "react";
import { getUserProfile } from "../libs/api/auth";

const TestPage = () => {
  const [result, setResult] = useState(null);
  const [userId, setUserId] = useState(null);
  const [nickname, setNickname] = useState(null);

  useEffect(() => {
    const test = async () => {
      const { id, nickname } = await getUserProfile();
      setUserId(id);
      setNickname(nickname);
    };
    test();
  }, []);

  const handleTestSubmit = async (answers) => {
    const mbtiResult = calculateMBTI(answers);
    setResult(mbtiResult);

    await createTestResult({
      nickname: nickname,
      result: mbtiResult,
      visibility: true,
      date: new Date().toLocaleString(),
      userId: userId,
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
