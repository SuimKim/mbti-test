import React from "react";
import Button from "./Button";

const ResultItem = () => {
  return (
    <div className="max-w-xl bg-slate-500 p-5">
      <div className="flex justify-between">
        <span className="text-white">닉네임</span>
        <span className="text-slate-400">작성시간</span>
      </div>
      <hr className="mb-5 mt-5 border-slate-400" />
      <h1 className="font-bold text-2xl text-blue-900 mb-3">ENFJ</h1>
      <p className="text-white mb-5">
        ENFJ: 이타주의자의 끝판왕! ENFJ는 사람을 돕는 데에 진심인 편이에요.
        이들은 모든 사람에게 좋은 사람이 되고자 하며, 자기 자신보다 남을 더
        우선시하는 슈퍼히어로 같은 존재예요. 친구들이 고민 상담을 할 때마다 차
        한 잔 준비해놓고 기다리고 있을지도 몰라요. 그러나 가끔 너무 많은 걸
        감당하려고 해서 자신을 잊어버리기도 해요. 그래서 가끔은 '나도 휴식이
        필요해!'라고 외칠 필요가 있어요.
      </p>
      <button className="p-2 bg-blue-400 mr-5 rounded-lg text-white">
        공개로 전환
      </button>
      <button className="p-2 bg-red-400 rounded-lg text-white">삭제</button>
    </div>
  );
};

export default ResultItem;
