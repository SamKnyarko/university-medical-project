const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;


mongoose.connect('mongodb://localhost/ugmc-emr-system', { useNewUrlParser: true, useUnifiedTopology: true });

const Patient = require('./models/patient');


app.use(express.json());


app.post('/api/patients/register', async (req, res) => {
  try {
    
    const {
      patientID,
      surname,
      otherNames,
      gender,
      phoneNumber,
      residentialAddress,
      emergencyName,
      emergencyContact,
      relationshipWithPatient,
    } = req.body;

    // Check if the patient already exists
    const existingPatient = await Patient.findOne({ patientID });
    if (existingPatient) {
      return res.status(400).json({ message: 'Patient already exists with the provided ID' });
    }

    // Create a new patient instance
    const newPatient = new Patient({
      patientID,
      surname,
      otherNames,
      gender,
      phoneNumber,
      residentialAddress,
      emergencyName,
      emergencyContact,
      relationshipWithPatient,
    });

    // Save the patient to the database
    await newPatient.save();

    res.status(201).json({ message: 'Patient registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});




const Encounter = require('./models/encounter');

// Route for starting an encounter
app.post('/api/encounters/start', async (req, res) => {
  try {
    // Extract encounter data from the request body
    const { patientID, dateAndTime, encounterType } = req.body;

    // Check if the patient exists
    const patient = await Patient.findOne({ patientID });
    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' });
    }

    
    const newEncounter = new Encounter({
      patientID,
      dateAndTime,
      encounterType,
    });

   
    await newEncounter.save();

    res.status(201).json({ message: 'Encounter started successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


const Vitals = require('./models/vitals');

// Route for submitting patient vitals
app.post('/api/vitals/submit', async (req, res) => {
  try {
    // Extract vitals data from the request body
    const { patientID, bloodPressure, temperature, pulse, spO2 } = req.body;

    // Check if the patient exists
    const patient = await Patient.findOne({ patientID });
    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' });
    }

    // Create a new vitals instance
    const newVitals = new Vitals({
      patientID,
      bloodPressure,
      temperature,
      pulse,
      spO2,
    });

    // Save the vitals to the database
    await newVitals.save();

    res.status(201).json({ message: 'Vitals submitted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

