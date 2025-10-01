import React, { useState } from "react";
import ResumeImg from "../assets/resume.jpg";  // sample resume image
// sample interview image

function Blog() {
  const [activeSection, setActiveSection] = useState(null);

  const sections = {
    resume: {
      title: "Resume Resources",
      content: (
        <>
          <p>
            Detailed guides on writing, formatting, and optimizing a resume to
            stand out in the job market. Includes tips on structure, keywords,
            and design.
          </p>
          <img
            src={ResumeImg}
            alt="Resume Example"
            style={{
              width: "100%",
              maxWidth: "400px",
              marginTop: "15px",
              borderRadius: "10px",
            }}
          />
        </>
      ),
    },
    cover: {
      title: "Cover Letter Resources",
      content: (
        <>
          <p>
            In-depth guides on writing and structuring a strong cover letter.
            Learn how to tailor each cover letter to the job role, highlight
            your achievements, and impress hiring managers.
          </p>
          {/* No image here */}
        </>
      ),
    },
    interview: {
      title: "Interview Resources",
      content: (
        <>
          <p>
            Professional guides on acing a job interview. Covers common
            interview questions, STAR method answers, and tips for building
            confidence.
          </p>
          <ul>
            <li>Tell me about yourself</li>
            <li>What are your strengths & weaknesses?</li>
            <li>Where do you see yourself in 5 years?</li>
            <li>Why should we hire you?</li>
          </ul>
          
        </>
      ),
    },
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Blog & Career Resources</h1>

      {/* Navigation */}
      <section style={{ marginBottom: "30px" }}>
        <h2>Resources</h2>
        <ul>
          <li
            onClick={() => setActiveSection("resume")}
            style={{ cursor: "pointer", color: "blue" }}
          >
            Resume Resources
          </li>
          <li
            onClick={() => setActiveSection("cover")}
            style={{ cursor: "pointer", color: "blue" }}
          >
            Cover Letter Resources
          </li>
          <li
            onClick={() => setActiveSection("interview")}
            style={{ cursor: "pointer", color: "blue" }}
          >
            Interview Resources
          </li>
        </ul>
      </section>

      {/* Dynamic Content */}
      {activeSection && (
        <section style={{ marginTop: "20px" }}>
          <h2>{sections[activeSection].title}</h2>
          {sections[activeSection].content}
        </section>
      )}

      {/* Career Growth Section */}
      <section style={{ marginTop: "40px" }}>
        <h2>Career Growth</h2>
        <p>
          Thorough guides on how to grow and excel in your professional career.
          Explore topics like leadership, communication, personal branding, and
          continuous learning to stay ahead.
        </p>
      </section>
    </div>
  );
}

export default Blog;
