module.exports = function(sequelize, DataTypes) {
  var mushroom = sequelize.define("mushroom", {
    "class": DataTypes.STRING,
    "cap-shape": DataTypes.STRING,
    "cap-surface": DataTypes.STRING,
    "cap-color": DataTypes.STRING,
    "bruises": DataTypes.STRING,
    "odor": DataTypes.STRING,
    "gill-attachment": DataTypes.STRING,
    "gill-spacing": DataTypes.STRING,
    "gill-size": DataTypes.STRING,
    "gill-color": DataTypes.STRING,
    "stalk-shape": DataTypes.STRING,
    "stalk-root": DataTypes.STRING,
    "stalk-surface-below-ring": DataTypes.STRING,
    "stalk-surface-above-ring": DataTypes.STRING,
    "stalk-color-above-ring": DataTypes.STRING,
    "stalk-color-below-ring": DataTypes.STRING,
    "veil-type": DataTypes.STRING,
    "veil-color": DataTypes.STRING,
    "ring-number": DataTypes.STRING,
    "ring-type": DataTypes.STRING,
    "population": DataTypes.STRING,
    "habitat": DataTypes.STRING
  });
  return mushroom;
};
