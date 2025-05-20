import React from "react";

function RoomSelector({ room, setRoom }) {
  const rooms = ["Room A", "Room B", "Room C"];

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Select a Room</h2>
      <div className="flex space-x-4">
        {rooms.map((r) => (
          <button
            key={r}
            onClick={() => setRoom(r)}
            className={`px-4 py-2 rounded-xl border font-medium ${
              room === r ? "bg-blue-500 text-white" : "bg-white text-gray-800"
            }`}
          >
            {r}
          </button>
        ))}
      </div>
    </div>
  );
}

export default RoomSelector;
