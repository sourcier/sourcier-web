var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var nunjucks = require('nunjucks');

var app = express();

// Configure view engine
var nunjucksEnv = nunjucks.configure('views', {autoescape: true, express: app});
nunjucksEnv.addFilter('date', function(dateString, dateFormat) {
    var moment = require('moment'),
        date = 'now' == dateString ? new Date() : new Date(dateString);
    
    return moment(date).format(dateFormat);
});
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

// Define routes
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', require('./routes/index'));
app.use('/', require('./routes/about-us'));
app.use('/', require('./routes/services'));
app.use('/', require('./routes/testimonials'));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
