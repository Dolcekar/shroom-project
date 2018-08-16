var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.mushroom.findAll({where: {id: {[db.Sequelize.Op.between]: [1, 999]}}}).then(function(mushroomResult) {
      res.render("index", {
        mushrooms: mushroomResult
      })
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
