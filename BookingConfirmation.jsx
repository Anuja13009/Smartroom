import React, { useState } from "react";
import toast from "react-hot-toast";

function BookingConfirmation() {
  const [isBooked, setIsBooked] = useState(false);

  const handleBooking = () => {
    setIsBooked(true);
    toast.success("Booking Confirmed! You will receive an SMS shortly.");
  };

  return (
    <div className="text-center">
      <button
        onClick={handleBooking}
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl text-lg hover:bg-blue-700"
      >
        Book Now
      </button>

      {isBooked && (
        <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg">
          <p className="text-lg font-medium">Booking Confirmed!</p>
          <p>You will receive a confirmation SMS shortly.</p>
        </div>
      )}
    </div>
  );
}

export default BookingConfirmation;
