const mongoose = require('mongoose');

//eventually add bcrypt

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;