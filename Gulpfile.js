'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('./static/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./static/'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./static/**/*.scss', ['sass']);
});

gulp.task('watch', ['sass:watch'])
gulp.task('build', ['sass'])
