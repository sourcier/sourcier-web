'user strict';

var gulp = require('gulp');
var rename = require("gulp-rename");
var sourcemaps = require('gulp-sourcemaps');
var server = require('gulp-develop-server');
var stylus = require('gulp-stylus');

var paths = {
    stylus: ['stylus/**/*.styl'],
    all: ['public/**/*','routes/**/*', 'stylus/**/*', 'views/**/*', 'app.js']
};

gulp.task('stylus', function () {
    return gulp.src(paths.stylus)
        .pipe(sourcemaps.init())
        .pipe(stylus({compress: true}))
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./public/assets/sourcier/css'));
});

gulp.task('watch', function () {
    gulp.watch(paths.stylus, ['stylus']);
});

gulp.task('default', ['watch', 'server:start'], function () {
    gulp.watch(paths.all, ['server:restart']);
});

gulp.task('server:start', function () {
    server.listen({
        path: 'bin/www',
        env: {
            DEBUG: 'sourcier-web:*'
        }
    });
});

gulp.task('server:restart', function () {
    server.restart();
});
