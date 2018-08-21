var db = require("../models");

module.exports = function(app) {
  // Get all from one to the number!
  app.get("/api/mushrooms/:number", function(req, res) {
    var maxNumber = req.params.number;

    db.mushroom.findAll({where: {id: {[db.Sequelize.Op.between]: [1, maxNumber]}}}).then(function(mushroomResult) {
      res.json(mushroomResult);
    });
  });

  app.post("/api/mushrooms/answer", function(req, res) {
    console.log("=============================");
    console.log(req.body.property);
    console.log("=============================");
    var selection = req.body.property;

    db.mushroom.findAll({
      where: {
        habitat: selection[0],
        population: selection[1]
      }
    }).then(function(result) {
      console.log(result);
    })
  })
};
