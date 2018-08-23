var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var session = require('express-session');
var okta = require("@okta/okta-sdk-nodejs");
var ExpressOIDC = require("@okta/oidc-middleware").ExpressOIDC;

const dashboardRouter = require("./routes/dashboard");        
const publicRouter = require("./routes/public");

var app = express();

var oktaClient = new okta.Client({
  orgUrl: 'https://dev-942199.oktapreview.com',
  token: '00Ikm9L34b_q8bLIdFk4l-yT1wQbwMrtK1Ba8FzO8e'
});
//some problems in session. Maybe syntax? Refer to documentation
const oidc = new ExpressOIDC({
  issuer: "https://dev-942199.oktapreview.com/oauth2/default",
  client_id: "0oag0t64ob2cWyDH50h7",
  client_secret: "7Czen6EEUgu7TMirHgIKblPilwARFX2DmJs8eiyD",
  redirect_uri: 'http://localhost:3000/users/callback',
  scope: "openid profile",
  routes: {
    login: {
      path: "/users/login"
    },
    callback: {
      path: "/users/callback",
      defaultRedirect: "/dashboard"
    }
  }
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'asdf;lkjh3lkjh235l23h5l235kjh',
  resave: true,
  saveUninitialized: false
}));
app.use(oidc.router);

app.use('/', publicRouter);
app.use('/dashboard', dashboardRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
