const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  date: String,
  room: String,
  phone: String,
});

module.exports = mongoose.model("Booking", BookingSchema);
