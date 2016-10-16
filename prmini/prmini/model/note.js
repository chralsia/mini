const mongoose = require('../lib/mongoose');
const Schema = mongoose.Schema;

const Note = new Schema({
    name: { type: String, required: true},
    phone: { type: String, required: true},
});

const Notes = mongoose.model('Note', Note);

module.exports = Notes;