var gulp = require('gulp');

var browserify = require('browserify');

var babelify = require('babelify');

var source = require('vinyl-source-stream');

gulp.task('default', ['browserify']);

gulp.task('browserify', function () {

    return browserify('./main.js')
    //.transform(babelify)  // {state: 0 } parameter removed... not sure if this does anything now...
        .transform(babelify, {presets: ["es2015", "react"]})
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('js'));
});

gulp.task('watch', function () {

    gulp.watch('**/*.js', ['browserify']);
});