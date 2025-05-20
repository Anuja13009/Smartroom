const Booking = require("../models/Booking");
const twilio = require("twilio");
const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH);

exports.bookRoom = async (req, res) => {
  const { date, room, phone } = req.body;

  try {
    const booking = new Booking({ date, room, phone });
    await booking.save();

    await client.messages.create({
      body: `Your SmartRoom booking for ${room} on ${date} is confirmed!`,
      from: process.env.TWILIO_PHONE,
      to: phone,
    });

    res.status(201).json({ message: "Booking confirmed and SMS sent" });
  } catch (err) {
    res.status(500).json({ error: "Booking failed" });
  }
};

exports.getAvailability = async (req, res) => {
  const { date } = req.query;
  try {
    const bookings = await Booking.find({ date });
    res.status(200).json(bookings);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch availability" });
  }
};
