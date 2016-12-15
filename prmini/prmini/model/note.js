const mongoose = require('../lib/mongoose');
const Schema = mongoose.Schema;

const Note = new Schema({
    firstName: { type: String, required: true},
    lastName: { type: String, required: true},
    phone: { type: String, required: true}
});

const Notes = mongoose.model('Note', Note);

module.exports = Notes;