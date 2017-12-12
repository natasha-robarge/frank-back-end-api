//Importing dependencies
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
require('dotenv').config();

mongoose.connect(process.env.DB_CONN);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

const userRoute = require('./routes/users');

// Handling routes
app.post('/signup', userRoute.saveUser);

app.get('/', (req, res) => {
  res.send('Check out our /signup page');
})

// Listen to port

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Listening on port 3000`);
})