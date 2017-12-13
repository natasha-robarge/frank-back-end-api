//Importing dependencies
const mongodb = require('mongodb');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI);

app.use(bodyParser.json());

// Handling routes

app.get('/', (req, res) => {
  res.send('Howdy');
})

const userRoute = require('./routes/users');

app.post('/signup', userRoute.saveUser);

// Listen to port

var PORT = process.env.PORT || 3000

const server = app.listen(PORT, () => {
  console.log(`Listening on port 3000`);
})

