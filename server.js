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

const server = app.listen(3000 || process.env.PORT, () => {
  console.log(`Listening on port 3000`);
})

