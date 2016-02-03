var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('index');
});

router.get('/about-us', function (req, res, next) {
    res.render('about-us');
});

router.get('/services', function (req, res, next) {
    res.render('services');
});

router.get('/testimonials', function (req, res, next) {
    res.render('testimonials');
});


module.exports = router;
