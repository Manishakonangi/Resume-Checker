import React, { useState } from "react";
import ContactImg from "../assets/contact.jpg"; // Add a contact image in your assets folder

function Organizations() {
  const [showMessage, setShowMessage] = useState(false);

  const handleContactClick = () => {
    setShowMessage(true);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>For Organizations</h1>
      <p>
        Enhance your hiring process and find the best candidates efficiently.
        Our tools help organizations manage resumes, cover letters, and
        applicant tracking with ease.
      </p>

      <div style={{ marginTop: "20px" }}>
        <h2>Features for Organizations</h2>
        <ul>
          <li>Bulk Resume Review</li>
          <li>Team Management & Collaboration</li>
          <li>Custom Branding for job postings</li>
          <li>Access to advanced AI insights for candidate matching</li>
          <li>Priority support and dedicated account management</li>
        </ul>
      </div>

      <div style={{ marginTop: "20px" }}>
        <h2>Get Started</h2>
        <p>
          Contact our sales team to create an account for your organization and
          start hiring smarter today.
        </p>
        <button
          onClick={handleContactClick}
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Contact Sales
        </button>

        {showMessage && (
          <div
            style={{
              marginTop: "20px",
              padding: "15px",
              border: "1px solid #007bff",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              gap: "15px",
              backgroundColor: "#f0f8ff",
            }}
          >
            <img
              src={ContactImg}
              alt="Contact Sales"
              style={{ width: "80px", borderRadius: "10px" }}
            />
            <span>
              Thank you for your interest! Our sales team will contact you soon.
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Organizations;
