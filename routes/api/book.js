var express = require('express');
var router = express.Router();
var Book = require('../../models/Book');
var escapeRegExp = require('lodash/escapeRegExp');
var map = require('lodash/map');

/* GET ALL BOOKS */
router.get('/', function(req, res, next) {
   Book.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
 });


/* GET SINGLE BOOK BY ID */
 router.get('/:id', function(req, res, next) {
  Book.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
 });

// /* GET SINGLE BOOK BY SINGLE USER */
 router.get('/:seller', function(req, res, next) {
   Book.find(req.params.seller, function (err, post) {
    if (err) return next(err);
   res.json(post);
  });
 });

 /* SAVE BOOK */
 router.post('/', function(req, res, next) {
  const book = new Book(req.body);
  return book.save()
  .then(newTask => res.status(201).json(newTask))
  .catch(next)
  })

// /*SEARCHING FOR TITLE
router.get('/search/:title', function(req, res, next) {
  const title = escapeRegExp(req.params.title)
  const query = new RegExp(`.*${title}.*`, 'i');
  console.log('why will you not work')
  Book.find({ title: query })
 .limit(1)
 .then(results => res.json(map(results, 'title')))
 .catch(next)
 
 
 return Book.find({"isbn": "0134093410"})
  .then(response => res.json(response))
  .catch(() => res.json({message: "book can not be found"}))
})

 router.post('/', function(req, res, next) {
   Book.create(req.body, function (err, post) {
     if (err) return next(err);
     res.json(post);
   });
 });
 /* SAVE BOOK */
 router.post('/', function(req, res, next) {
   Book.create(req.body).then(post => {
      return res.json(post);
   }).catch(err)
 });

/* UPDATE BOOK */
router.put('/:id', function(req, res, next) {
  Book.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE BOOK */
router.delete('/:id', function(req, res, next) {
  Book.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;