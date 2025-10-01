import React, { useState } from "react";

function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState("");

  const handleChoose = (plan) => {
    setSelectedPlan(plan);

    if (plan === "Free") {
      alert("Free plan selected");
    } else if (plan === "Pro") {
      alert("Pro plan selected");
    } else if (plan === "Organization") {
      alert("Contact Sales at: sales@example.com | +91 9876543210");
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Pricing Plans</h1>
      <p>Choose the plan that fits your needs:</p>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center", marginTop: "20px" }}>
        {/* Free Plan */}
        <div style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "10px", width: "250px" }}>
          <h2>Free</h2>
          <p>Basic access to resume and cover letter tools</p>
          <ul>
            <li>Resume Builder</li>
            <li>Cover Letter Builder</li>
            <li>Limited Templates</li>
          </ul>
          <button onClick={() => handleChoose("Free")}>Choose Free</button>
        </div>

        {/* Pro Plan */}
        <div style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "10px", width: "250px" }}>
          <h2>Pro</h2>
          <p>Advanced features for job seekers</p>
          <ul>
            <li>Unlimited Templates</li>
            <li>AI Resume & Cover Letter Suggestions</li>
            <li>Priority Support</li>
          </ul>
          <button onClick={() => handleChoose("Pro")}>Choose Pro</button>
        </div>

        {/* Organization Plan */}
        <div style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "10px", width: "250px" }}>
          <h2>For Organizations</h2>
          <p>Hire the best candidates efficiently</p>
          <ul>
            <li>Bulk Resume Review</li>
            <li>Team Management</li>
            <li>Custom Branding</li>
          </ul>
          <button onClick={() => handleChoose("Organization")}>Contact Sales</button>
        </div>
      </div>

      {/* Display selected plan */}
      {selectedPlan && (
        <p style={{ marginTop: "20px" }}>
          Selected Plan: <b>{selectedPlan}</b>
        </p>
      )}
    </div>
  );
}

export default Pricing;
