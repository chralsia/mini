const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.sendfile('views/index.html');
});
router.post('/', function(req, res, next){
    res.end();
});

module.exports = router;