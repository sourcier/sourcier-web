var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    var heroIndex = Math.floor(Math.random() * 3) + 1;  
    res.render('index', {heroIndex: heroIndex});
});

module.exports = router;
