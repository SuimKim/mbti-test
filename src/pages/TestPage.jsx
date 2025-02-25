import { useState } from "react";
import TestForm from "../components/TestForm";
import { calculateMBTI, mbtiDescriptions } from "../libs/utils/mbtiCalculator";
import { createTestResult } from "../libs/api/testResults";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import useProfile from "../libs/hooks/useProfile";
import { Title } from "../components/Text";

const TestPage = () => {
  const [result, setResult] = useState(null);

  const { auth, isAuthPending, isAuthError } = useProfile();

  const handleTestSubmit = async (answers) => {
    const mbtiResult = calculateMBTI(answers);
    setResult(mbtiResult);

    await createTestResult({
      nickname: auth.nickname,
      result: mbtiResult,
      visibility: true,
      date: new Date().toLocaleString(),
      userId: auth.id,
    });
  };

  if (isAuthPending) {
    return <div>Loading...</div>;
  }

  if (isAuthError) {
    return <div>Error...</div>;
  }

  return (
    <div className="w-full flex flex-col items-center justify-center p-10">
      <div className="bg-white rounded-lg p-8 max-w-lg w-full h-full overflow-y-auto">
        {!result ? (
          <>
            <Title contents={"MBTI 테스트"} />
            <TestForm onSubmit={handleTestSubmit} />
          </>
        ) : (
          <>
            <Title contents={`테스트 결과: ${result}`} />
            <p className="text-lg text-gray-700 mb-6">
              {mbtiDescriptions[result] ||
                "해당 성격 유형에 대한 설명이 없습니다."}
            </p>
            <div className="flex justify-end">
              <Link to={"/results"}>
                <Button label="결과 페이지로 이동하기" />
              </Link>{" "}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TestPage;
