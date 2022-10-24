const router = require("express").Router();
const thoughtroutes = require("./thoughtroutes");
const userroutes = require("./userroutes");

// At /api/users
router.use("/users", userroutes);
// At /api/thoughts
router.use("/thoughts", thoughtroutes);

module.exports = router;
