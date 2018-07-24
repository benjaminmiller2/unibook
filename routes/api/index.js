const router = require("express").Router();
const userRoutes = require("./user");
const bookRoutes  = require('./book.js');


router.use("/user", userRoutes);
router.use("/books", bookRoutes);



module.exports = router;
