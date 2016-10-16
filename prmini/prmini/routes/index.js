var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Notebook',
    home: true
  });
});
router.post('/', function(req, res, next){
  res.render('index', {
    title: 'Notebook',
    home: true
  });
});

module.exports = router;
