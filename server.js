//Importing dependencies
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const userRoute = require('./routes/users');

// Handling routes
app.post('/signup', userRoute.saveUser);

app.get('/', (req, res) => {
  res.send('Check out our /signup page');
})

// Listen to port

const server = app.listen(3000, () => {
  console.log(`Listening on port 3000`);
})