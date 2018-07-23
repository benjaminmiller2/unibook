
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Book = require('../../models/Book');
var User = require('../../models/user');
var passport = require('passport');


/* GET ALL BOOKS */
router.get('/Show', isLoggedIn, function(req, res, next) {
  Book.find(function (err, books) {
    if (err) return next(err);
    res.json(books);
  });
});

//get all books for user
// router.get('/Show', function(req, res, next){
//   Book.find({user: req.user}, function(err, books){
//     if(err){
//       return res.write('Error');
//     }
//   });
//   res.render('Show');
// });

// router.get('/show', isLoggedIn, function(req, res, next){
//   console.log("hello");
//   User.findById(req.session.user.id).populate('books').then(foundUser => {
//     res.render(Show);
//     console.log(foundUser);
      
//   });
// });

//route to get all books for user and display all books on show page then user can click on one book to take them to show bookid 

/* GET SINGLE BOOK BY ID */
router.get('/:id', function(req, res, next) {
  Book.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

// /* SAVE BOOK */
router.post('/', isLoggedIn, function(req, res, next) {
  const book = new Book(req.body);
  console.log(req.session.user);
  return book.save()
  .then(newTask => res.status(201).json(newTask))
  .catch(next)
 })

// router.post('/', function(req, res, next) {
//   Book.create(req.body, function (err, post) {
//     if (err) return next(err);
//     res.json(post);
//   });
// });
// /* SAVE BOOK */
// router.post('/', function(req, res, next) {
//   Book.create(req.body).then(post => {
//      return res.json(post);
//   }).catch(err)
// });

/* UPDATE BOOK */
router.put('/Show', isLoggedIn, function(req, res, next) {
  Book.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE BOOK */
router.delete('/:id', isLoggedIn, function(req, res, next) {
  Book.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


// This is a middleware. 
// This checks to make sure the user is logged in
// before allowing them to continue to the page 

    // **** This should be put in every get request in this file
    function isLoggedIn(req, res, next) {
      if(req.isAuthenticated()){
          return next();
      }
      // if the user is not logged in, redirect them to signup
      res.redirect('/signup');
  }

module.exports = router;