//Importing dependencies
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
require('dotenv').config();

mongoose.connect(process.env.DB_CONN);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const userRoute = require('./routes/users');

// Handling routes

app.get('/', (req, res) => {
  res.send('Howdy');
})

// Listen to port

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Listening on port 3000`);
})

