var db = require("../models");

module.exports = function(app) {
  // Get all mushrooms!
  app.get("/api/mushrooms", function(req, res) {
    db.mushroom.findAll({where: {id: {[db.Sequelize.Op.between]: [1, 999]}}}).then(function(mushroomResult) {
      res.json(mushroomResult);
    });
  });
};
