var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var cssMin = require('gulp-css');

gulp.task('css', function() {
    gulp.src([
            './css/bootstrap.min.css',
            './css/style.css'
        ])
        .pipe(concat('style.min.css'))
        .pipe(cssMin())
        .pipe(gulp.dest('./css/'))
});

gulp.task('scripts', function () {
    gulp.src([
            './js/jquery-3.3.1.min.js',
            './js/bootstrap.min.js',
            './js/jquery.validate.js',
            './js/main.js'        
        ])
        .pipe(concat('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./js'))
});

gulp.task('default', ['css', 'scripts']); 