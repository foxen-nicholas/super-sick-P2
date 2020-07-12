var express = require('express');
var router = express.Router();
var db = require('../models');
const axios = require('axios');

const errorHandler = err => {
  console.log("Error");
  console.log(error)
}

// GET
// router.get('/', (req, res) => {
//   res.render('categories');
// })

router.get('/', function(req, res) {
  var mealUrl = "https://www.themealdb.com/api/json/v1/1/categories.php";

  axios.get(mealUrl)
  .then(function(apiResponse) {
    var categories = apiResponse.data.categories;
    res.render('categories/index', {categories: categories});
  }).catch(errorHandler)
});

router.get('/beef', function(req, res) {
  var beefUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef`;

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

router.get('/pasta', function(req, res) {
  var pastaUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Pasta";

  axios.get(pastaUrl)
  .then(function(apiResponse) {
    var meals = apiResponse.data.meals;
    res.render('categories/pasta', {meals:meals});
  })
})

router.get('/pork', function(req, res) {
  var porkUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Pork";

  axios.get(porkUrl)
  .then(function(apiResponse) {
    var meals = apiResponse.data.meals;
    res.render('categories/pork', {meals:meals});
  })
})

router.get('/seafood', function(req, res) {
  var seafoodUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood";

  axios.get(seafoodUrl)
  .then(function(apiResponse) {
    var meals = apiResponse.data.meals;
    res.render('categories/seafood', {meals:meals});
  })
})

router.get('/side', function(req, res) {
  var sideUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Side";

  axios.get(sideUrl)
  .then(function(apiResponse) {
    var meals = apiResponse.data.meals;
    res.render('categories/side', {meals:meals});
  })
})

router.get('/starter', function(req, res) {
  var starterUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Starter";

  axios.get(starterUrl)
  .then(function(apiResponse) {
    var meals = apiResponse.data.meals;
    res.render('categories/starter', {meals:meals});
  })
})

router.get('/vegan', function(req, res) {
  var veganUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegan";

  axios.get(veganUrl)
  .then(function(apiResponse) {
    var meals = apiResponse.data.meals;
    res.render('categories/vegan', {meals:meals});
  })
})

router.get('/vegetarian', function(req, res) {
  var vegetarianUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian";

  axios.get(vegetarianUrl)
  .then(function(apiResponse) {
    var meals = apiResponse.data.meals;
    res.render('categories/vegetarian', {meals:meals});
  })
})

router.get('/breakfast', function(req, res) {
  var breakfastUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast";

  axios.get(breakfastUrl)
  .then(function(apiResponse) {
    var meals = apiResponse.data.meals;
    res.render('categories/breakfast', {meals:meals});
  })
})

router.get('/goat', function(req, res) {
  var goatUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Goat";

  axios.get(goatUrl)
  .then(function(apiResponse) {
    var meals = apiResponse.data.meals;
    res.render('categories/goat', {meals:meals});
  })
})

router.get('/show', function(req, res) {
  var recipeUrl = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=${req.params.idMeal}";
  console.log(idMeal);
  axios.get(recipeUrl)
  .then(function(apiResponse) {
    var meals = apiResponse.data.meals;
    res.render('categories/show', {meals:meals});
  })
})

module.exports = router;