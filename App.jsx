import React, { useState } from "react";
import CalendarView from "./components/CalendarView";
import RoomSelector from "./components/RoomSelector";
import BookingConfirmation from "./components/BookingConfirmation";
import { Toaster } from "react-hot-toast";

function App() {
  const [date, setDate] = useState(new Date());
  const [room, setRoom] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-6 font-sans">
      <h1 className="text-3xl font-bold text-center mb-8">SmartRoom Booking System</h1>
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow-xl">
        <CalendarView date={date} setDate={setDate} />
        <RoomSelector room={room} setRoom={setRoom} />
        <BookingConfirmation />
      </div>
      <Toaster position="bottom-center" />
    </div>
  );
}

export default App;
