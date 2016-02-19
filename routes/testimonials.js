var express = require('express');
var router = express.Router();

// Define server side routes below
router.get('/testimonials', function(request, response) {
    response.render('testimonials.html');
});

module.exports = router;
