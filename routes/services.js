var express = require('express');
var router = express.Router();

// Define server side routes below
router.get('/services', function(request, response) {
    response.render('services.html');
});

module.exports = router;
