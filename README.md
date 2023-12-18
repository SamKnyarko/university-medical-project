# university-medicical-project
# UGMC Electronic Medical Record System

## Overview

This project implements an Electronic Medical Record (EMR) System for the University of Ghana Medical Center (UGMC) using Node.js, Express, and MongoDB. The system includes functionalities such as patient registration, starting encounters, submitting patient vitals, and viewing patient details.

## Tech Stack

- Node.js
- Express
- MongoDB

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB installed and running

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/SamKnyarko/university-medical-project.git
   cd ugmc-emr-system
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   node index.js
   ```

   The server will be running at [http://localhost:3000](http://localhost:3000).

## API Endpoints

### 1. Patient Registration

- **Endpoint:** `POST /api/patients/register`
- **Description:** Registers new patients.
- **Request Body:**

  ```json
  {
    "patientID": "0123456",
    "surname": "Forlan",
    "otherNames": "James",
    "gender": "Male",
    "phoneNumber": "1234567890",
    "residentialAddress": "123 Main St, City",
    "emergencyName": "Emergency Contact",
    "emergencyContact": "9876543210",
    "relationshipWithPatient": "Relative"
  }
  ```

- **Response:**

  ```json
  {
    "message": "Patient registered successfully"
  }
  ```

### 2. Start Encounter

- **Endpoint:** `POST /api/encounters/start`
- **Description:** Starts a new patient encounter.
- **Request Body:**

  ```json
  {
    "patientID": "1111",
    "dateAndTime": "2023-01-01T12:00:00",
    "encounterType": "Emergency"
  }
  ```

- **Response:**

  ```json
  {
    "message": "Encounter started successfully"
  }
  ```

### 3. Submit Patient Vitals

- **Endpoint:** `POST /api/vitals/submit`
- **Description:** Submits patient vitals.
- **Request Body:**

  ```json
  {
    "patientID": "1735",
    "bloodPressure": "140/70",
    "temperature": "78.6",
    "pulse": "80",
    "spO2": "98"
  }
  ```

- **Response:**

  ```json
  {
    "message": "Vitals submitted successfully"
  }
  ```

### 4. View List of Patients

- **Endpoint:** `GET /api/patients/list`
- **Description:** Retrieves a list of all patients.
- **Response:**

  ```json
  [
    {
      "patientID": "14556",
      "surname": "shadrack",
      "otherNames": "Clinton",
      "gender": "Male",
      "phoneNumber": "0554477289",
      "residentialAddress": "Takoradi, western region",
      "emergencyName": "Emergency Contact",
      "emergencyContact": "9876543210",
      "relationshipWithPatient": "Relative"
    },
    // ... (other patients)
  ]
  ```

### 5. View Patient Details

- **Endpoint:** `GET /api/patients/:patientID`
- **Description:** Retrieves details of a specific patient.
- **Response:**

  ```json
  {
    "patientID": "197567",
    "surname": "Endrick",
    "otherNames": "John",
    "gender": "Male",
    "phoneNumber": "0238390712",
    "residentialAddress": "Kwabenya,Accra",
    "emergencyName": "Emergency Contact",
    "emergencyContact": "0876543210",
    "relationshipWithPatient": "Relative"
  }
  ```
