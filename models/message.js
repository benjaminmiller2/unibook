var mongoose = require('mongoose');

var MessageSchema = new mongoose.Schema({
    title: String,
    updated_date: { type: Date, default: Date.now },
    image: String,
    seller: String,
    buyer: String,
    buyer_email: String,
  });

  module.exports = mongoose.model('message', MessageSchema);