const mongoose = require('mongoose');

const vitalsSchema = new mongoose.Schema({
  patientID: String,
  bloodPressure: String,
  temperature: String,
  pulse: String,
  spO2: String,
});

module.exports = mongoose.model('Vitals', vitalsSchema);
