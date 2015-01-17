/*global require */
/*jslint node: true */

'use strict';

var gulp = require('gulp');
var mocha = require('gulp-mocha');
var gutil = require('gulp-util');
var watch = require('gulp-watch');

gulp.task('mocha', function () {
  return gulp.src(['spec/*.js'], { read: false })
            .pipe(mocha({ reporter: 'spec' }))
            .on('error', gutil.log);
});

gulp.task('watch-mocha', function () {
  gulp.watch(['./**.js', 'spec/*.js'], ['mocha']);
});

gulp.task('test', ['mocha', 'watch-mocha']);