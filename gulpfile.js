/**
 * Require Dependencies
 */
var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

var sass = require('gulp-sass');
var minifycss = require('gulp-minify-css');
var rename = require('gulp-rename');
var util = require('gulp-util');
//var browserSync = require('browser-sync').create();

/**
 * Default Tasks
 */
gulp.task('default', ['watch']);



/**
 * Browserify (compile js to 'bundle.js')
 */
gulp.task('browserify', function () {

    return browserify('./js/app.js')
    //.transform(babelify)  // {state: 0 } parameter removed... not sure if this does anything now...
        .transform(babelify, {presets: ["es2015", "react"]})
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./'));
});

/**
 * SCSS
 */
gulp.task('scss', function() {
    gulp.src(['assets/scss/app.scss'])
        .pipe(sass({style: 'compressed', errLogToConsole: true}))
        .pipe(rename('app.min.css'))
        .pipe(minifycss())
        .pipe(gulp.dest('assets/css'));
    util.log(util.colors.green('SCSS Compiled!'));
});

/**
 * Watch Tasks
 */
gulp.task('watch', function () {

    gulp.watch('js/**/*.js', ['browserify']);
    gulp.watch('assets/scss/**/*.scss', ['scss']);
});
