const router = require("express").Router();
const articleController = require("../../controllers/userController");

// Matches with "/api/user"
router.route("/")

  .post(userController.create);

// Matches with "/api/articles/:id"


module.exports = router;