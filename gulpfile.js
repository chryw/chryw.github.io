'use strict'
const gulp = require('gulp');
const exec = require('child_process').exec;
const del = require('del');
const replace = require('gulp-replace');
const util = require('gulp-util');
const ftp = require('vinyl-ftp');
const minimist = require('minimist');
const imagemin = require('gulp-imagemin');
const merge = require('merge-stream');
const deployargs = minimist(process.argv.slice(2));
const conn = ftp.create({
  host: deployargs.host,
  user: deployargs.user,
  password: deployargs.password,
  log: util.log
});
let timestamp = Math.round(Date.now() / 1000);

gulp.task('default',['cachebust']);

gulp.task('clean', () => {
    return del(['_site']);
});

gulp.task('build',['imagemin'], (cb) => {
	return exec(['jekyll b --source . --destination _site'], (err, stdout, stderr) => {
			console.log(stdout);
			console.log(stderr);
			cb(err);
	});
});

gulp.task('imagemin', () => {
  return gulp.src(['images/*.{png,svg,jpeg,jpg}'])
  .pipe(imagemin({
    verbose: true
  }))
  .pipe(gulp.dest('images'));
});

gulp.task('cachebust',['build'], () => {
  let html = gulp.src(['_site/index.html'])
  .pipe(replace(/@@hash/g, timestamp))
  .pipe(gulp.dest('_site'));
  let js = gulp.src(['_site/javascripts/main.js'])
  .pipe(replace(/@@hash/g, timestamp))
  .pipe(gulp.dest('_site/javascripts'));
  return merge(html,js);
});

//ftp deployment
gulp.task('deploy',['cleanremote'], () => {
  return gulp.src('_site/**/*.*')
  .pipe(conn.dest('chryw'));
});

gulp.task('cleanremote', (cb) => {
    return conn.rmdir('chryw', (err) => {
        cb();
    });
});
