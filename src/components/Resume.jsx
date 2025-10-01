import React from "react";

function Resume({ setPage }) {
  return (
    <div>
      <h2>Resume Resources</h2>

      <h3>Templates</h3>
      <ul>
        <li>
          <button onClick={() => setPage("creative")}>
            Creative Templates
          </button>
        </li>
        <li>
          <button onClick={() => setPage("traditional")}>
            Traditional Templates
          </button>
        </li>
        <li>
          <button onClick={() => setPage("modern")}>
            Modern Templates
          </button>
        </li>
        <li>
          <button onClick={() => setPage("simple")}>
            Simple Templates
          </button>
        </li>
      </ul>

      <h3>Resume Writing Guides</h3>
      <ul>
        <li><button onClick={() => setPage("guide-writing")}>Writing a Resume</button></li>
        <li><button onClick={() => setPage("guide-summary")}>Resume Summary</button></li>
        <li><button onClick={() => setPage("guide-format")}>Choosing a Resume Format</button></li>
        <li><button onClick={() => setPage("guide-onepage")}>Fitting Experience on One Page</button></li>
      </ul>

      <h3>Resume Examples</h3>
      <ul>
        <li><button onClick={() => setPage("example-pm")}>Project Manager</button></li>
        <li><button onClick={() => setPage("example-ds")}>Data Scientist</button></li>
        <li><button onClick={() => setPage("example-sm")}>Scrum Master</button></li>
        <li><button onClick={() => setPage("example-ba")}>Business Analyst</button></li>
      </ul>

      <h3>Extra Tools</h3>
      <ul>
        <li><button onClick={() => setPage("ai-builder")}>AI Resume Builder</button></li>
        <li><button onClick={() => setPage("checker")}>Resume Checker</button></li>
        <li><button onClick={() => setPage("skills")}>Resume Skills</button></li>
      </ul>
    </div>
  );
}

export default Resume;
