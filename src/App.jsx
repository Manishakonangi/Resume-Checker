import React, { useState } from "react";
import ResumeUpload from "./components/ResumeUpload";
import CoverLetter from "./components/CoverLetter";
import Blog from "./components/Blog";
import Pricing from "./components/Pricing";
import Organizations from "./components/Organizations";
import CreativeTemplate from "./components/CreativeTemplate";
import TraditionalTemplate from "./components/TraditionalTemplate";
import ModernTemplate from "./components/ModernTemplate";
import SimpleTemplate from "./components/SimpleTemplate";
import Login from "./components/Login";
import Register from "./components/Register";
import ResultPage from "./components/ResultPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);
  const [page, setPage] = useState("resume");
  const [showDropdown, setShowDropdown] = useState(false);
  const [aiResult, setAiResult] = useState(null);

  const handleLogin = (username) => setUser(username);
  const handleLogout = () => setUser(null);

  const Navbar = () => (
    <div
      style={{
        position: "sticky",
        top: 0,
        background: "#eee",
        padding: "10px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
        <button onClick={() => setPage("resume")}>Resume</button>
        <button onClick={() => setPage("coverLetter")}>Cover Letter</button>
        <button onClick={() => setPage("blog")}>Blog</button>
        <button onClick={() => setPage("pricing")}>Pricing</button>
        <button onClick={() => setPage("orgs")}>Organizations</button>

        <div
          style={{ position: "relative" }}
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <button>Templates ▼</button>
          {showDropdown && (
            <div
              style={{
                position: "absolute",
                top: "100%",
                left: 0,
                background: "#fff",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                display: "flex",
                flexDirection: "column",
                minWidth: "150px",
              }}
            >
              <button onClick={() => setPage("creative")}>Creative Template</button>
              <button onClick={() => setPage("modern")}>Modern Template</button>
              <button onClick={() => setPage("traditional")}>Traditional Template</button>
              <button onClick={() => setPage("simple")}>Simple Template</button>
            </div>
          )}
        </div>
      </div>

      <div>
        {!user ? (
          <>
            <button onClick={() => setPage("login")}>Login</button>
            <button onClick={() => setPage("register")}>Register</button>
          </>
        ) : (
          <>
            <span>Welcome, {user}</span>
            <button onClick={handleLogout}>Logout</button>
          </>
        )}
      </div>
    </div>
  );

  const renderCentralPage = () => {
    switch (page) {
      case "resume":
        return <ResumeUpload setPage={setPage} setAiResult={setAiResult} />;
      case "coverLetter":
        return <CoverLetter />;
      case "blog":
        return <Blog />;
      case "pricing":
        return <Pricing />;
      case "orgs":
        return <Organizations />;
      case "creative":
        return <CreativeTemplate />;
      case "modern":
        return <ModernTemplate />;
      case "traditional":
        return <TraditionalTemplate />;
      case "simple":
        return <SimpleTemplate />;
      case "login":
        return <Login onLogin={handleLogin} setPage={setPage} />;
      case "register":
        return <Register setPage={setPage} />;
      case "result":
        return <ResultPage aiResult={aiResult} setPage={setPage} />;
      default:
        return <ResumeUpload setPage={setPage} setAiResult={setAiResult} />;
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <Navbar />
      {renderCentralPage()}
    </div>
  );
}

export default App;
