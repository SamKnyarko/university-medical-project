// models/patient.js
const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  patientID: String,
  surname: String,
  otherNames: String,
  gender: String,
  phoneNumber: String,
  residentialAddress: String,
  emergencyName: String,
  emergencyContact: String,
  relationshipWithPatient: String,
});

module.exports = mongoose.model('Patient', patientSchema);
