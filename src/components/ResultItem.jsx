import React, { useEffect, useState } from "react";
import { mbtiDescriptions } from "../libs/utils/mbtiCalculator";
import { getUserProfile } from "../libs/api/auth";
import {
  deleteTestResult,
  updateTestResultVisibility,
} from "../libs/api/testResults";

const ResultItem = ({ item }) => {
  const { id, nickname, result, visibility, date, userId } = item;

  const [writerId, setWriterId] = useState(null);

  useEffect(() => {
    const test = async () => {
      const { id } = await getUserProfile();
      setWriterId(id);
    };
    test();
  }, []);

  const deleteHandler = async () => {
    await deleteTestResult(id);
  };

  const updateVisibilityHandler = async () => {
    await updateTestResultVisibility(id, !visibility);
  };

  return (
    <div className="max-w-xl bg-slate-500 p-5 mb-5">
      <div className="flex justify-between">
        <span className="text-white">{nickname}</span>
        <span className="text-slate-400">{date}</span>
      </div>
      <hr className="mb-5 mt-5 border-slate-400" />
      <h1 className="font-bold text-2xl text-blue-900 mb-3">{result}</h1>
      <p className="text-white mb-5">
        {mbtiDescriptions[result] || "해당 성격 유형에 대한 설명이 없습니다."}
      </p>
      {writerId === userId ? (
        <div className="flex justify-end">
          <button
            className="p-2 bg-blue-400 mr-3 rounded-lg text-white"
            onClick={updateVisibilityHandler}
          >
            {visibility ? "공개로 전환" : "비공개로 전환"}
          </button>
          <button
            className="p-2 bg-red-400 rounded-lg text-white"
            onClick={deleteHandler}
          >
            삭제
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ResultItem;
