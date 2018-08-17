var db = require("../models");

module.exports = function(app) {
  // Get all from one to the number!
  app.get("/api/mushrooms/:number", function(req, res) {
    var maxNumber = req.params.number;

    db.mushroom.findAll({where: {id: {[db.Sequelize.Op.between]: [1, maxNumber]}}}).then(function(mushroomResult) {
      res.json(mushroomResult);
    });
  });

  app.get("/api/mushrooms")
};
