var express = require('express');
var router = express.Router();
var Message = require('../../models/message');

/* GET ALL BOOKS */
router.get('/', function(req, res, next) {
  Message.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});


/* GET SINGLE BOOK BY ID */
router.get('/:id', function(req, res, next) {
  Message.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET SINGLE BOOK BY SINGLE USER */
router.get('/:seller', function(req, res, next) {
  Message.find(req.params.seller, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

// /* SAVE a Message */
router.post('/', function(req, res, next) {
  const message = new Message(req.body);
  return message.save()
  .then(newTask => res.status(201).json(newTask))
  .catch(next)
 })

/* DELETE BOOK */
router.delete('/:id', function(req, res, next) {
  Message.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;