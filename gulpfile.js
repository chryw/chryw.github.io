const gulp = require('gulp');
const del = require('del');
const replace = require('gulp-replace');
const imagemin = require('gulp-imagemin');

const timestamp = Math.round(Date.now() / 1000);

gulp.task('default', ['cachebust']);

gulp.task('clean', () => del(['_site']));

gulp.task('imagemin', () =>
  gulp.src(['images/*.{png,svg,jpeg,jpg}'])
    .pipe(imagemin({
      verbose: true,
    }))
    .pipe(gulp.dest('images')));

gulp.task('cachebust', ['build'], () =>
  gulp.src(['_site/**/*.{html, js}'], { base: '_site/' })
    .pipe(replace(/@@hash/g, timestamp))
    .pipe(gulp.dest('_site')));
