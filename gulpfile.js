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
// var plumber = require('gulp-plumber');
// gulp plumber? this will allow gulp to still run after error?

/**
 * Default Tasks
 */
gulp.task('default', ['watch']);



/**
 * Browserify (compile js to 'bundle.js')
 */
gulp.task('browserify', () => {

    return browserify('./js/app.js')                            // bundles all modules together
        .transform(babelify, {presets: ["es2015", "react"]})    // transforms jsx to js (es6)
        .bundle()                                               // browserify method?
        .pipe(source('./bundle.js'))                            // source - make it readable by gulp?
        .pipe(gulp.dest('./'));                                 // set destination
});

/**
 * SCSS
 */
gulp.task('scss', () => {
    gulp.src(['./assets/scss/app.scss'])
        .pipe(sass({style: 'compressed', errLogToConsole: true}))
        .pipe(rename('./app.min.css'))
        .pipe(minifycss())
        .pipe(gulp.dest('./assets/css'));
    util.log(util.colors.green('SCSS Compiled!'));
});

/**
 * Watch Tasks
 */
gulp.task('watch', () => {

    gulp.watch('./js/**/*.js', ['browserify']);
    gulp.watch('./assets/scss/**/*.scss', ['scss']);
});
