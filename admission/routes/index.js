 var express = require('express');
 var router = express.Router();
 var passport = require('passport');

 // variables to inject

 var userObj = {
     user: 'Finn',
     tokens: 'over 9000',
     startDate: '3/7/2015',
     adCount: 'over 9000',
     topComment: 'Hack the planet!',
     email: 'whatis@n.email.com',
 };

 /* GET home page. */
 router.get('/', function(req, res, next) {
     res.render('index', {
         title: 'Admission',
         partials: {
             part: 'home.hjs',
         }
     });
     res.render('index.hjs', {
         title: 'Admission',
         partials: {
             part: 'error',
         }
     });
 });

 // SIGN IN route

 router.get('/about', function(req, res, next) {
     res.render('index', {
         title: 'Admission',
         partials: {
             part: 'about',
         }
     });
 });

 // Trending Route

 router.get('/trending', function(req, res, next) {
     res.render('index', {
         title: 'Admission',
         partials: {
             part: 'trending',
         }
     });
 });

 // Profile page Route
 router.get('/profile', function(req, res, next) {
     res.render('index', {
         title: 'Admission',
         userObj:userObj,
         partials: {
             part: 'profile',
         }
     });
 });

// Survey View
 router.get('/survey', function(req, res, next) {
     res.render('index', {
         title: 'Admission',
         partials: {
             part: 'survey',
         }
     });
 });

 router.get('/login', function(req, res, next) {

     // render the page and pass in any flash data if it exists
     res.render('login', {
         'layout': 'index',
         message: req.flash('loginMessage')
     });
 });

 router.post('/login', passport.authenticate('local-login', {
     successRedirect: '/profile', // redirect to the secure profile section
     failureRedirect: '/login', // redirect back to the signup page if there is an error
 }));

 // SIGN UP route

 router.get('/signup', function(req, res) {

     // render the page and pass in any flash data if it exists
     res.render('signup', {
         'layout': 'index',
         message: req.flash('signupMessage')
     });
 });

 router.post('/signup', passport.authenticate('local-signup', {
     successRedirect: '/profile', // redirect to the secure profile section
     failureRedirect: '/signup', // redirect back to the signup page if there is an error
 }));

 // LOGOUT route

 router.get('/logout', function(req, res) {
     req.logout();
     res.redirect('/');
 });

 // Profile page

 router.get('/profile', function(req, res) {
     res.render('profile', {
         'layout': 'index'
     });
 });

 function isLoggedIn(req, res, next) {

     // if user is authenticated in the session, carry on 
     if (req.isAuthenticated())
         return next();

     // if they aren't redirect them to the home page
     res.redirect('/');
 }

 module.exports = router;
