const router = require("express").Router();
const userRoutes = require("./user");
const bookRoutes  = require('./book');
const messageRoutes = require('./message');


router.use("/user", userRoutes);
router.use("/book", bookRoutes);
router.use("/message", messageRoutes);


module.exports = router;
