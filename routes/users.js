const express = require("express");
 
const router = express.Router();
 
// Log a user out
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
  res.render("index.pug"); //added line to test persistent logout
});
 
module.exports = router;