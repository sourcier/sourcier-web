'user strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require("gulp-rename");
var sourcemaps = require('gulp-sourcemaps');

var paths = {
    sass: ['./sass/**/*.scss']
};

gulp.task('sass', function () {
    return gulp.src(paths.sass)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(rename(function(path) {
            path.basename = path.basename + '.min';
        }))
        .pipe(gulp.dest('./public/assets/sourcier/css'));
});

gulp.task('watch', function() {
    gulp.watch(paths.sass, ['sass']);
});

gulp.task('default', ['watch']);
