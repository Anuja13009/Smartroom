const express = require("express");
const router = express.Router();
const { bookRoom, getAvailability } = require("../controllers/bookingController");

router.post("/book", bookRoom);
router.get("/availability", getAvailability);

module.exports = router;
