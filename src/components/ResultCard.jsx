import React from "react";

const ResultCard = ({ result }) => {
  return (
    <div className="mt-6 w-full max-w-2xl bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-xl font-bold text-green-600 mb-4">
        ✅ AI Resume Analysis
      </h2>
      <pre className="whitespace-pre-wrap text-gray-800">{result}</pre>
    </div>
  );
};

export default ResultCard;
