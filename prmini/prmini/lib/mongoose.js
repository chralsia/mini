const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/notebook");

module.exports = mongoose;