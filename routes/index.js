var express = require('express');
var router = express.Router();

// Define server side routes below
router.get('/', function(request, response) {
    response.render('index.html');
});

module.exports = router;
