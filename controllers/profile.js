var express = require('express');
var router = express.Router();
var db = require('../models');
const axios = require('axios');

const errorHandler = err => {
  console.log("Error");
  console.log(error)
}

router.get('/', function(req, res) {
  var mealUrl = "https://www.themealdb.com/api/json/v1/1/categories.php";

  axios.get(mealUrl)
  .then(function(apiResponse) {
    var categories = apiResponse.data.categories;
    res.render('profile/index', {categories: categories});
  }).catch(errorHandler)
});

router.get('/beef', function(req, res) {
  var beefUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef";

  axios.get(beefUrl)
  .then(function(apiResponse) {
    var meals = apiResponse.data.meals;
    res.render('profile/beef')
  })
})

module.exports = router;