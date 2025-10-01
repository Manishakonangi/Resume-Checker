import React from "react";
import "../styles/ResultPage.css";

const ResultPage = ({ aiResult, setPage }) => {
  const aiText = aiResult;

  if (!aiText) {
    return (
      <div className="result-container">
        <p>No analysis available. Please upload a resume.</p>
        <button onClick={() => setPage("resume")}>Go Back</button>
      </div>
    );
  }

  const scoreMatch = aiText.match(/Score:\s*(\d+\/100)/i);
  const score = scoreMatch ? scoreMatch[1] : "N/A";

  const improvementsMatch = aiText.match(/Improvements:\s*([\s\S]*?)Missing Keywords:/i);
  const improvements = improvementsMatch
    ? improvementsMatch[1].trim().split("\n").map((item) => item.replace(/^\d+\.\s*/, ""))
    : [];

  const keywordsMatch = aiText.match(/Missing Keywords:\s*([\s\S]*)/i);
  const missingKeywords = keywordsMatch
    ? keywordsMatch[1].trim().split("\n").map((item) => item.replace(/^\d+\.\s*/, ""))
    : [];

  return (
    <div className="result-container">
      <h2>Resume Analysis Result</h2>

      <div className="score-box">
        <strong>Score:</strong> {score}
      </div>

      <div className="feedback-box">
        <h3>Improvements:</h3>
        <ul>
          {improvements.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="feedback-box">
        <h3>Missing Keywords:</h3>
        <ul>
          {missingKeywords.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>

      <button className="upload-button" onClick={() => setPage("resume")}>
        Upload Another Resume
      </button>
    </div>
  );
};

export default ResultPage;
