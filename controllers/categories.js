var express = require('express');
var router = express.Router();
var db = require('../models');
const axios = require('axios');

const errorHandler = err => {
  console.log("Error");
  console.log(error)
}

// GET
router.get('/', (req, res) => {
  res.render('categories');
})

router.get('/beef', function(req, res) {
  var beefUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef";

  axios.get(beefUrl)
  .then(function(apiResponse) {
    var meals = apiResponse.data.meals;
    res.render('categories/beef', {meals: meals})
  })
})

router.get('/chicken', function(req, res) {
  var chickenUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken";

  axios.get(chickenUrl)
  .then(function(apiResponse) {
    var meals = apiResponse.data.meals;
    res.render('categories/chicken', {meals:meals});
  })
})

router.get('/dessert', function(req, res) {
  var dessertUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert";

  axios.get(dessertUrl)
  .then(function(apiResponse) {
    var meals = apiResponse.data.meals;
    res.render('categories/dessert', {meals:meals});
  })
})

router.get('/lamb', function(req, res) {
  var lambUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Lamb";

  axios.get(lambUrl)
  .then(function(apiResponse) {
    var meals = apiResponse.data.meals;
    res.render('categories/lamb', {meals:meals});
  })
})

module.exports = router;