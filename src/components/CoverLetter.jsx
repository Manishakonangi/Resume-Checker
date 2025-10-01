import React, { useState } from "react";

// Import images (place them in src/assets/)
import BuilderImg from "../assets/builder.jpg";
import TemplateImg from "../assets/templates.jpg";
import AIGeneratorImg from "../assets/ai.jpg";
import FormatImg from "../assets/formats.jpg";
import DesignImg from "../assets/design.jpg";

import QAImg from "../assets/qa.jpg";
import CashierImg from "../assets/cashier.jpg";
import AnalystImg from "../assets/data-analyst.jpg";
import UXImg from "../assets/ux.jpg";
import ArchitectImg from "../assets/architect.jpg";
import CivilImg from "../assets/civil.jpg";
import LecturerImg from "../assets/lecturer.jpg";
import PilotImg from "../assets/pilot.jpg";
import WaiterImg from "../assets/waiter.jpg";
import DataEngineerImg from "../assets/data-engineer.jpg";

function CoverLetter() {
  const [selected, setSelected] = useState(null);

  const sections = {
    "Cover Letter Builder": {
      description: [
        "Easily create a professional cover letter matching your resume style.",
        "Choose from multiple modern & traditional templates.",
        "Personalize with AI suggestions for wording.",
        "Export in PDF/Word formats instantly.",
      ],
      image: BuilderImg,
    },
    "Cover Letter Templates": {
      description: [
        "Professionally designed cover letter templates for different industries.",
        "ATS-friendly formats that recruiters love.",
      ],
      image: TemplateImg,
    },
    "Free AI Cover Letter Generator": {
      description: [
        "Generate personalized cover letters in seconds.",
        "Powered by AI suggestions tailored to your job title.",
      ],
      image: AIGeneratorImg,
    },
    "Writing a Cover Letter": {
      description: [
        "Step-by-step guidance on writing effective cover letters.",
        "Covers structure, tone, and key elements recruiters look for.",
      ],
      image: TemplateImg,
    },
    "Cover Letter Formats": {
      description: [
        "Understand different formats: standard, email, creative, and modern.",
        "Pick the right one for your industry.",
      ],
      image: FormatImg,
    },
    "Ending a Cover Letter": {
      description: [
        "Learn professional ways to close your cover letter.",
        "End with confidence to increase your chances of an interview.",
      ],
      image:TemplateImg ,
    },
    "Cover Letter Design": {
      description: [
        "Discover design principles for clean and professional cover letters.",
        "Balance readability with visual appeal.",
      ],
      image: DesignImg,
    },

    // ==== JOB-SPECIFIC EXAMPLES ====
    "QA Engineer": {
      description: [
        "Tailored for QA Engineer applications.",
        "Highlights testing frameworks, automation, and bug tracking skills.",
      ],
      image: QAImg,
    },
    "Cashier": {
      description: [
        "Perfect for cashier job applications.",
        "Focuses on customer service, handling transactions, and accuracy.",
      ],
      image: CashierImg,
    },
    "Data Analyst": {
      description: [
        "Showcases analytical skills, SQL, Excel, and BI tools.",
        "Emphasizes turning data into business insights.",
      ],
      image: AnalystImg,
    },
    "UX Designer": {
      description: [
        "Highlights design thinking, prototyping, and user research.",
        "Tailored for creative UX design positions.",
      ],
      image: UXImg,
    },
    "Architect": {
      description: [
        "Covers architectural design, CAD expertise, and project management.",
        "Great for applications in construction and design firms.",
      ],
      image: ArchitectImg,
    },
    "Civil Engineer": {
      description: [
        "Focuses on structural design, site management, and AutoCAD.",
        "Tailored for civil infrastructure projects.",
      ],
      image: CivilImg,
    },
    "Lecturer": {
      description: [
        "Highlights teaching, research, and academic contributions.",
        "Best suited for university and college faculty positions.",
      ],
      image: LecturerImg,
    },
    "Pilot": {
      description: [
        "Showcases flight hours, certifications, and aviation expertise.",
        "Tailored for commercial airline or private pilot roles.",
      ],
      image: PilotImg,
    },
    "Waiter": {
      description: [
        "Emphasizes hospitality, speed, and customer service.",
        "Designed for restaurant and hospitality sector jobs.",
      ],
      image: WaiterImg,
    },
    "Data Engineer": {
      description: [
        "Highlights big data pipelines, ETL, and cloud technologies.",
        "Tailored for backend engineering and data infrastructure roles.",
      ],
      image: DataEngineerImg,
    },
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Cover Letter Resources</h1>
      <div style={{ display: "flex", gap: "40px" }}>
        
        {/* Sidebar */}
        <div style={{ width: "250px" }}>
          <h3>Cover Letter Tools</h3>
          <ul>
            <li onClick={() => setSelected("Cover Letter Builder")}>Cover Letter Builder</li>
            <li onClick={() => setSelected("Cover Letter Templates")}>Cover Letter Templates</li>
            <li onClick={() => setSelected("Free AI Cover Letter Generator")}>AI Cover Letter Generator</li>
          </ul>

          <h3>Writing Guides</h3>
          <ul>
            <li onClick={() => setSelected("Writing a Cover Letter")}>Writing a Cover Letter</li>
            <li onClick={() => setSelected("Cover Letter Formats")}>Cover Letter Formats</li>
            <li onClick={() => setSelected("Ending a Cover Letter")}>Ending a Cover Letter</li>
            <li onClick={() => setSelected("Cover Letter Design")}>Cover Letter Design</li>
          </ul>

          <h3>Examples</h3>
          <ul>
            {[
              "QA Engineer",
              "Cashier",
              "Data Analyst",
              "UX Designer",
              "Architect",
              "Civil Engineer",
              "Lecturer",
              "Pilot",
              "Waiter",
              "Data Engineer",
            ].map((job) => (
              <li key={job} onClick={() => setSelected(job)}>{job}</li>
            ))}
          </ul>
        </div>

        {/* Content */}
        <div style={{ flex: 1, borderLeft: "1px solid #ccc", paddingLeft: "20px" }}>
          {selected ? (
            <>
              <h2>{selected}</h2>
              {sections[selected].description && (
                <ul>
                  {sections[selected].description.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              )}
              {sections[selected].image && (
                <img 
                  src={sections[selected].image} 
                  alt={`${selected} example`} 
                  style={{
                    marginTop: "20px",
                    maxWidth: "100%",
                    borderRadius: "10px",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
                  }} 
                />
              )}
            </>
          ) : (
            <p>Click an item on the left to see details here.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CoverLetter;
