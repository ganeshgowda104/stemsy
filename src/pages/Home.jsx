import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div
      style={{
        height: "100vh",
        padding: "40px",
        backgroundImage: "linear-gradient(to right, #141E30, #243B55)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#E0E0E0",
        fontFamily: "'Roboto', sans-serif",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>Homepage</h1>
      <ul style={{ listStyle: "none", padding: "0" }}>
        {/* <li style={{ marginBottom: "10px" }}>
          <Link to="/help" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Help
          </Link>
        </li> */}
        <li style={{ marginBottom: "10px" }}>
          <Link
            to="/signinfilled"
            style={{ color: "#87CEFA", textDecoration: "none" }}
          >
            Signinfilled
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link
            to="/home1"
            style={{ color: "#87CEFA", textDecoration: "none" }}
          >
            Home1
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link
            to="/homeone"
            style={{ color: "#87CEFA", textDecoration: "none" }}
          >
            HomeOne
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link
            to="/video"
            style={{ color: "#87CEFA", textDecoration: "none" }}
          >
            {" "}
            Video{" "}
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link
            to="/library"
            style={{ color: "#87CEFA", textDecoration: "none" }}
          >
            Library
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link
            to="/assessment"
            style={{ color: "#87CEFA", textDecoration: "none" }}
          >
            Assessment
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link
            to="/assessmentsaved"
            style={{ color: "#87CEFA", textDecoration: "none" }}
          >
            Assessmentsaved
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link
            to="/profile"
            style={{ color: "#87CEFA", textDecoration: "none" }}
          >
            Profile
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link
            to="/helpone"
            style={{ color: "#87CEFA", textDecoration: "none" }}
          >
            HelpOne
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link
            to="/aichatbot"
            style={{ color: "#87CEFA", textDecoration: "none" }}
          >
            AIchatbot
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link
            to="/storytelling"
            style={{ color: "#87CEFA", textDecoration: "none" }}
          >
            Storytelling
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link
            to="/storytellingone"
            style={{ color: "#87CEFA", textDecoration: "none" }}
          >
            StorytellingOne
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/help" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Help
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link
            to="/aboutcourse"
            style={{ color: "#87CEFA", textDecoration: "none" }}
          >
            Aboutcourse
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
