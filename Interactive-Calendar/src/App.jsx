import React, { useState, useEffect } from "react";
import Calendar from "./Calendar";
import Notes from "./Notes";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    localStorage.setItem("theme", darkMode);
  }, [darkMode]);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "true") setDarkMode(true);
  }, []);

  return (
    <div className={darkMode ? "dark" : "light"}>

      {/* Toggle */}
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light ☀️" : "Dark 🌙"}
      </button>

      {/* Hero Image TOP */}
      <div className="hero">
        <img src="https://media.assettype.com/outlookindia/2024-07/5c1b801c-0287-4fb1-8d3b-9404d3d45699/rohit_sharma_with_t20_world_cup_trophy_X__BCCI.jpg?w=801&auto=format,compress&fit=max&format=webp&dpr=1.0 "/>
      </div>

      {/* Main Content */}
      <div className="main">
        <div className="left">
          <Notes />
        </div>

        <div className="right">
          
          <Calendar />
        </div>
      </div>
      <h2>📅 Calendar</h2>
      <h1>Don't Waste Time, Invest It...</h1>

    </div>
  );
}

export default App;