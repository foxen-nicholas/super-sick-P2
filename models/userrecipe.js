'use strict';
module.exports = (sequelize, DataTypes) => {
  const userrecipe = sequelize.define('userrecipe', {
    userId: DataTypes.INTEGER,
    strMeal: DataTypes.STRING,
    strMealDescription: DataTypes.STRING
  }, {});
  userrecipe.associate = function(models) {
    // associations can be defined here
    models.userrecipe.belongsTo(models.user)
  };
  return userrecipe;
};