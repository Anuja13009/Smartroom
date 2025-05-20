import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function CalendarView({ date, setDate }) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleChange = (newDate) => {
    setSelectedDate(newDate);
    setDate(newDate);
  };

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Select a Date</h2>
      <Calendar onChange={handleChange} value={selectedDate} className="rounded-xl" />
    </div>
  );
}

export default CalendarView;
