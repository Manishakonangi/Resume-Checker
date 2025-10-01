import React from "react";
import { useNavigate } from "react-router-dom";
import ModernImg from "../assets/resume.jpg"; // <-- add your image in assets

function ModernTemplate() {


  return (
    <div style={{ padding: "20px" }}>
      <h2>Modern Resume Templates</h2>
      <p>
        Modern templates use stylish fonts, balanced sections, and contemporary
        layouts. Perfect for tech and fast-moving industries.
      </p>
      <img
        src={ModernImg}
        alt="Modern Template"
        style={{
          width: "100%",
          maxWidth: "500px",
          marginTop: "15px",
          borderRadius: "10px",
        }}
      />
      <br />

    </div>
  );
}

export default ModernTemplate;
