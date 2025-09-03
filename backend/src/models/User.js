const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    regNumber: { type: String, required: true, unique: true }, // e.g., "123456"
    username:  { type: String, required: true },
    passwordHash: { type: String, required: true } // we’ll hash later
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
