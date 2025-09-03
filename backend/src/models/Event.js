const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    dateKey: { type: String, required: true }, // "Tue Sep 02 2025-9"
    dept: String,
    batch: String,
    eventType: String,
    gallery: String,
    user: String, // temporary user id/name
  },
  { timestamps: true }
);

module.exports = mongoose.model("Event", eventSchema);
