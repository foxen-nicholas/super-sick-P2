var express = require('express');
var router = express.Router();
var db = require('../models');
const axios = require('axios');
const isLoggedIn = require('../middleware/isLoggedIn');

const errorHandler = err => {
  console.log("Error");
  console.log(error)
}
router.get('/', function(req, res) {
  res.render("profile/index");
});

router.get('/', function(req, res) {
  var mealUrl = "https://www.themealdb.com/api/json/v1/1/categories.php";

  axios.get(mealUrl)
  .then(function(apiResponse) {
    var categories = apiResponse.data.categories;
    res.render('profile/index', {categories: categories});
  }).catch(errorHandler)
});

router.get('/userrecipes', isLoggedIn, function(req, res) {
  // TODO: Get all records from the DB and render to view
   db.userrecipe.findAll().then(userrecipe => {
     res.render('profile/userrecipes', {userrecipe: userrecipe});
   }).catch(errorHandler)
});

router.post('/userrecipes', function(req, res) {
  // TODO: Get form data and add a new record to DB
  db.userrecipe.findOrCreate({
    where: {
      strMeal: req.body.strMeal
    },
    defaults: {
      strMeal: req.body.strMeal,
      strMealDescription: req.body.strMealDescription
    }
  }).then(function([meal, created]) {
    res.redirect('/profile/userecipes')
  })
});

module.exports = router;