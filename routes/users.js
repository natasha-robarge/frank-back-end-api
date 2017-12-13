const User = require('../models/user');

function saveUser(req, res) {
  const newUser = User({
    email: req.body.email,
    password: req.body.password
  })

  newUser.save((err, data) => {
    if (err) {
      console.log(`Error at ${err}`);
    } else {
      console.log(`Data received successfully, ${data}`);
    }
  });

}

module.exports = {
  saveUser: saveUser
}