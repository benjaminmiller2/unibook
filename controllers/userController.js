const db = require("../models");

// Defining methods for the userController
module.exports = {
  create: function(req, res) {
    console.log(req.body)
    if (req.body.email && req.body.username && req.body.password && req.body.passwordConf) {

      var userData = {
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        passwordConf: req.body.passwordConf,
      }
      console.log(userData)
      //use schema.create to insert data into the db
      db.User.create(userData, function (err, user) {
        if (err) {
          console.log(err)
          return res.sendStatus(500)
        } else {
          return res.redirect('/dashboard');
        }
      });
    }
    else {
      res.sendStatus(400);
    }
  }

};
