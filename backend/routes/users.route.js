module.exports = app => {
  var userController = require("../controllers/users.controller");
  app
    .route("/users")
    .post(userController.addUser)
    .get(userController.listUsers);
};
