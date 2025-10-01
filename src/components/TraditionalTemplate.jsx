import React from "react";

import TraditionalImg from "../assets/page.jpg"; // <-- add your image in assets

function TraditionalTemplate() {
// for navigation

  return (
    <div style={{ padding: "20px" }}>
      <h2>Traditional Resume Templates</h2>
      <p>
        Traditional templates are ideal for conservative industries such as law,
        banking, or government jobs, where you need a professional layout
        highlighting achievements clearly.
      </p>
      <img
        src={TraditionalImg}
        alt="Traditional Template"
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

export default TraditionalTemplate;
