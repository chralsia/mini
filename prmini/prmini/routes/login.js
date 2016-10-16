var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('login', { title: 'Log in' });
});
router.post('/', function(req, res, next) {
    console.log(req.body);
    res.render('login', { title: 'Log in' });
});

module.exports = router;