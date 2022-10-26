const router = require("express").Router();
// Already at /api/thoughts

// get route
router.get("/something", (req, res) => {
    // make a requet to the db using the thoughts model
    res.send("hello");
  });
  
  // post route
  router.post("/something", (req, res) => {
    // make a requet to the db using the thoughts model
    res.send("hello");
  });
  
  // put route
  router.put("/something", (req, res) => {
    // make a requet to the db using the thoughts model
    res.send("hello");
  });
  
  
  // delete route
  router.delete("/something", (req, res) => {
    // make a requet to the db using the thoughts model
    res.send("hello");
  });
module.exports = router;
