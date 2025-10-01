import React from "react";

function Navbar({ user, setPage, handleLogout }) {
  return (
    <div style={{ background: "#eee", padding: "10px" }}>
      {/* Static links */}
      <button onClick={() => setPage("resume")}>Resume</button>{" "}
      <button onClick={() => setPage("cover")}>Cover Letter</button>{" "}
      <button onClick={() => setPage("blog")}>Blog</button>{" "}
      <button onClick={() => setPage("pricing")}>Pricing</button>{" "}
      <button onClick={() => setPage("orgs")}>For Organizations</button>{" "}

      {/* Auth buttons */}
      {!user && (
        <>
          <button onClick={() => setPage("login")}>Login</button>{" "}
          <button onClick={() => setPage("register")}>Register</button>{" "}
        </>
      )}

      {user && (
        <>
          <button onClick={() => setPage("upload")}>Upload Resume</button>{" "}
          <button onClick={handleLogout}>Logout</button>{" "}
          <span style={{ marginLeft: "20px" }}>Welcome, {user}</span>
        </>
      )}
    </div>
  );
}

export default Navbar;
