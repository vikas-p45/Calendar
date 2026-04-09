import React, { useState } from "react";
import "./App.css";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();

  const days = [];

  // Empty spaces before first day
  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }

  // Actual days
  for (let i = 1; i <= totalDays; i++) {
    days.push(i);
  }

  const handleClick = (day) => {
    if (!day) return;

    if (!startDate) {
      setStartDate(day);
    } else if (!endDate) {
      if (day < startDate) {
        setStartDate(day);
      } else {
        setEndDate(day);
      }
    } else {
      setStartDate(day);
      setEndDate(null);
    }
  };

  const isInRange = (day) => {
    return startDate && endDate && day > startDate && day < endDate;
  };

  const changeMonth = (type) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(month + (type === "next" ? 1 : -1));
    setCurrentDate(newDate);
    setStartDate(null);
    setEndDate(null);
  };

  const monthName = currentDate.toLocaleString("default", {
    month: "long",
  });

  return (
    <div>

      {/* Header */}
      <div className="header">
        <button onClick={() => changeMonth("prev")}>◀</button>
        <h3>{monthName} {year}</h3>
        <button onClick={() => changeMonth("next")}>▶</button>
      </div>

      {/* Week Days */}
      <div className="calendar week">
        {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(d => (
          <div className="day bold" key={d}>{d}</div>
        ))}
      </div>

      {/* Dates */}
      <div className="calendar">
        {days.map((day, index) => (
          <div
            key={index}
            className={`day 
              ${day === startDate ? "start" : ""}
              ${day === endDate ? "end" : ""}
              ${isInRange(day) ? "range" : ""}
            `}
            onClick={() => handleClick(day)}
          >
            {day || ""}
          </div>
        ))}
      </div>

    </div>
  );
};

export default Calendar;