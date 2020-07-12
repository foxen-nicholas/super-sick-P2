'use strict';
module.exports = (sequelize, DataTypes) => {
  const category =sequelize.define('category', {
    strCategory: DataTypes.STRING,
    strCategoryThumb: DataTypes.STRING
  }, {});
  category.associate = function(models) {

  };
  return category;
};