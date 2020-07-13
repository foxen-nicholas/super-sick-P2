'use strict';
module.exports = (sequelize, DataTypes) => {
  const recipe = sequelize.define('recipe', {
    idMeal: DataTypes.STRING
  }, {});
  recipe.associate = function(models) {

  };
  return recipe;
}