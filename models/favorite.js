'use strict';
module.exports = (sequelize, DataTypes) => {
  const favorite = sequelize.define('favorite', {
    idMeal: DataTypes.STRING,
    strMealThumb: DataTypes.STRING,
    strMeal: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  favorite.associate = function(models) {
    // associations can be defined here
    models.favorite.belongsTo(models.user)
  };
  return favorite;
};