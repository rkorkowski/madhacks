var mongoose = require("mongoose");
var User = require("../models/users.model");

mongoose.model("User");

exports.listUsers = (req, res) => {
  console.log("Hello from the get request");
};

exports.addUser = (req, res) => {
  if (
    !req.body.firstName ||
    !req.body.lastName ||
    !req.body.username ||
    !req.body.password
  ) {
    console.log("BODY!:" + req.body.firstName);
    res.status(400);
    res.json({
      success: false,
      message:
        "Please include a first and last name, as well as a valid username and password"
    });
    return;
  } else {
    //console.log("BODY: " + req.body.firstName);
    var newUser = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      username: req.body.username,
      password: req.body.password
    });
    console.log("User:" + newUser);
    // attempt to save the user
    newUser.save(err => {
      if (err) {
        console.log(err);
        return res.json({ success: false, message: err });
      }
      res.json({
        success: true,
        message: "Successfully created new user"
      });
    });
  }
};
