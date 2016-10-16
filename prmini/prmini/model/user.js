const mongoose = require('../lib/mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    name: { type: String, required: true},
});

const Users = mongoose.model('User', User);

module.exports = Users;