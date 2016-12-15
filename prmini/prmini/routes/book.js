const express = require('express');
const router = express.Router();
const mongoose = require('../lib/mongoose');
const Note = require('../model/note');
var db = mongoose.connection;

router.get('/', function (req,res,next) {
    Note.find({}, function (err, notes) {
        res.send(notes)
    })
});
router.post('/', function (req,res,next) {
    let note = new Note(req.body);
    console.log(note)
    note.save((err) => {
        Note.find({}, function (err, notes) {
            res.send(notes)
        })
    });
})
router.delete('/:id', function (req,res,next) {
    console.log(req.params.id);
    Note.remove({_id: req.params.id}, function (err) {
        Note.find({}, function (err, notes) {
            res.send(notes)
        })
    })
})

module.exports = router;