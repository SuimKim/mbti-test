import React from "react";

const TestItem = ({ item }) => {
  return (
    <div key={item.id} className="m-5 mb-10">
      <p>{item.question}</p>
      {item.options.map((a) => (
        <div className="h-10 border-2 flex items-center p-3 mb-2 hover:cursor-pointer hover:bg-slate-100">
          <input type="radio" />
          &nbsp;{a}
        </div>
      ))}
    </div>
  );
};

export default TestItem;
