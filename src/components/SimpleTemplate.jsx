import React from "react";

import SimpleImg from "../assets/simple.jpg"; // <-- add your image in assets

function SimpleTemplate() {


  return (
    <div style={{ padding: "20px" }}>
      <h2>Simple Resume Templates</h2>
      <p>
        Simple templates focus on your skills and accomplishments without any
        distractions, great for clean, professional resumes.
      </p>
      <img
        src={SimpleImg}
        alt="Simple Template"
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

export default SimpleTemplate;
