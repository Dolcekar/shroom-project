var db = require("../models");
var questionData = require("../data/questions.js");

module.exports = function(app) {
  // Get all from one to the number!
  app.get("/api/mushrooms/:number", function(req, res) {
    var maxNumber = req.params.number;

    db.mushroom.findAll({where: {id: {[db.Sequelize.Op.between]: [1, maxNumber]}}}).then(function(mushroomResult) {
      res.json(mushroomResult);
    });
  });

  app.get("/api/questions", function(req, res) {
    console.log("========================");
    res.json(questionData);
  })

  app.post("/api/upload", function(req, res) {
    console.log(req.files);
    var chosenFile = req.files[0];
  })

  app.post("/api/answer", function(req, res) {
    
    var selection = req.body.property;
    console.log("=============================");
    console.log(selection);
    console.log("=============================");

    db.mushroom.findAll({
      where: {
        "habitat": selection[0],
        "population": selection[1],
        "cap-surface": selection[2],
        "cap-color": selection[3],
        "cap-shape": selection[4],
        "bruises": selection[5],
        "gill-attachment": selection[6],
        "gill-color": selection[7],
        "gill-spacing": selection[8],
        "gill-size": selection[9],
        "ring-number": selection[10],
        "ring-type": selection[11],
        "stalk-color-above-ring": selection[12],
        "stalk-color-below-ring": selection[13],
        "stalk-surface-above-ring": selection[14],
        "stalk-surface-below-ring": selection[15],
        "stalk-root": selection[16],
        "stalk-shape": selection[17],
        "veil-color": selection[18],
        "spore-print-color": selection[19],
        "odor": selection[20]
      }
    }).then(function(result) {
      res.json(result);
    })
  })
};
