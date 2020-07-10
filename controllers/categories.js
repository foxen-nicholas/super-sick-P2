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



module.exports = router;