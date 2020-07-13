// Required NPM libraries
require('dotenv').config();
const axios = require('axios');
const Express = require('express');
// require and set view engine using ejs
const ejsLayouts = require('express-ejs-layouts')
//require all middleware for ap/authentication
// helmet, morgan, passport, and custom middleware, express-session, sequelize session, flash
const helmet = require('helmet');
const session = require('express-session');
const flash = require('flash');
const passport = require('./config/ppConfig');
const db = require('./models');
// want to add alink to our customer middleware for isLoggedIn
const isLoggedIn = require('./middleware/isLoggedIn');
const SequelizeStore = require('connect-session-sequelize')(session.Store)
const methodOverride = require('method-override');


// App setup
const app = Express();
app.use(Express.urlencoded({ extended: false}));
app.use(Express.static(__dirname + "/public"));
app.set('view engine', 'ejs');
app.use(ejsLayouts);
app.use(require('morgan')('dev'));
app.use(helmet());
app.use(methodOverride('_method'));

// create new instance of class Sequelize Store
const sessionStore = new SequelizeStore({
  db: db.sequelize,
  expiration: 1000 * 60 * 30
})

app.use(session({
  secret: process.env.SESSION_SECRET,
  store: sessionStore,
  resave: false,
  saveUninitialized: true
}))
// Need next bit to run the previous bit
sessionStore.sync();
// Initialize flash message, passport and session info
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use(function(req,res, next) {
  res.locals.alerts = req.flash();
  res.locals.currentUser = req.user;

  next();
})


// ROUTES

app.get('/', function(req, res) {
  res.render("index");
});

// app.get('/profile', isLoggedIn, function(req, res) {
//   var mealUrl = "https://www.themealdb.com/api/json/v1/1/categories.php";

//   axios.get(mealUrl).then(function(apiResponse) {
//     console.log(apiResponse);
//     var category = apiResponse.data.results;
//     res.render('profile/index', { category: category})
//   }).catch(errorHandler)
// })

// include auth controllers 
app.use('/profile', require('./controllers/profile'));
app.use('/auth', require('./controllers/auth'));
app.use('/categories', require('./controllers/categories'));
// initialize 
app.listen(process.env.PORT || 3000, function() {
  console.log(`Rootin n Tootin on port ${process.env.PORT}`)
});