// models/encounter.js
const mongoose = require('mongoose');

const encounterSchema = new mongoose.Schema({
  patientID: String,
  dateAndTime: Date,
  encounterType: String,
});

module.exports = mongoose.model('Encounter', encounterSchema);
