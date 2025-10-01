import React from "react";

import CreativeImg from "../assets/task.jpg"; // Add your image in assets

function CreativeTemplate() {


  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>Creative Resume Templates</h2>
      <p>
        Creative resume templates are designed for roles in design, media,
        marketing, and creative industries. These capture the recruiter’s
        attention with unique layouts and visuals.
      </p>

      <img
        src={CreativeImg}
        alt="Creative Resume Template"
        style={{
          width: "100%",
          maxWidth: "600px",
          marginTop: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      />

      <div style={{ marginTop: "20px" }}>
       
         
      </div>
    </div>
  );
}

export default CreativeTemplate;
