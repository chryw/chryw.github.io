const gulp = require('gulp');
const exec = require('child_process').exec;
const del = require('del');
const replace = require('gulp-replace');
const util = require('gulp-util');
const ftp = require('vinyl-ftp');
const minimist = require('minimist');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();

const deployargs = minimist(process.argv.slice(2));
const conn = ftp.create({
  host: deployargs.host,
  user: deployargs.user,
  password: deployargs.password,
  log: util.log,
});
const timestamp = Math.round(Date.now() / 1000);

gulp.task('default', ['cachebust']);

gulp.task('clean', () => del(['_site']));

gulp.task('build', cb => exec(['jekyll b --source . --destination _site'], (err) => {
  cb(err);
}));

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


gulp.task('deploy', ['cleanremote'], () =>
  gulp.src('_site/**/*.*')
    .pipe(conn.dest('chryw')));

gulp.task('cleanremote', cb =>
  conn.rmdir('chryw', () => {
    cb();
  }));

gulp.task('watch', ['cachebust'], () => {
  browserSync.init({
    server: './_site',
  });
  gulp.watch('**/*, !_site/**/*', ['build']);
  gulp.watch('_site/**/*').on('change', browserSync.reload);
});
