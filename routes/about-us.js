var express = require('express');
var router = express.Router();

// Define server side routes below
router.get('/about-us', function(request, response) {
    response.render('about-us.html');
});

module.exports = router;
