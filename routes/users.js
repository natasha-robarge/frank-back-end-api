const User = require('../models/User');

function saveUser(req, res) {
  const newUser = User({
    email: req.body.email,
    password: req.body.password
  })

  newUser.save((err, data) => {
    if (err) {
      console.log(`Error at ${err}`);
    } else {
      console.log(`Successful save, ${data}`);
    }
  });

}

module.exports = {
  saveUser
}