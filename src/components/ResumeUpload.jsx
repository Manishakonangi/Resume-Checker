import React, { useState } from "react";
import axios from "axios";
import "../styles/ResumeUpload.css"; // make sure this path is correct

function ResumeUpload({ setPage, setAiResult }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please select a file first!");
      return;
    }

    const formData = new FormData();
    formData.append("resume", file);

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/api/resume/upload",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      const aiText = res.data.result;

      // Store AI result in App state
      setAiResult(aiText);

      // Navigate to ResultPage
      setPage("result");
    } catch (err) {
      console.error(err);
      alert("Error analyzing resume");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="resume-upload-container">
      <h2>Upload Your Resume</h2>
      <form onSubmit={handleUpload}>
        <input
          type="file"
          accept=".pdf,.docx"
          className="file-input"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button type="submit" className="upload-button">
          {loading ? "Analyzing..." : "Analyze"}
        </button>
      </form>
    </div>
  );
}

export default ResumeUpload;
