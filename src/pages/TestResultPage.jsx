import React from "react";
import ResultItem from "../components/ResultItem";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const TestResultPage = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const func = async () => {
      const { data } = await axios.get(`http://localhost:4000/testResults`);
      setResults(data);
    };
    func();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center m-10 ">
      <div className="bg-white p-8 w-full flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-6">MBTI 테스트 결과</h1>
        {results.map((item) => (
          <ResultItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default TestResultPage;
