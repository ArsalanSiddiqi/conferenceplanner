'use strict'

var mongoose= require('bluebird').promisifyAll(require('mongoose'));


var paperSchema = new mongoose.Schema(
  {
    name: String,
    year: Number,
    Descr: String,
    Author: String,
    datePublished: Date,
    dateReviewed: Date,
    reviewedBy: String

  }
);
export default mongoose.model('Paper',paperSchema);
