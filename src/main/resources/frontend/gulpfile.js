const gulp = require('gulp');
const { src, dest, series, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const clean = require('gulp-clean');
const replace = require('gulp-replace');
const fs = require('fs');
const args = process.argv.splice(3);


async function window() {

  var files = fs.readdirSync('./dist/ng-labs').filter(fn => fn.startsWith('main'));
  var data = fs.readFileSync('./dist/ng-labs/' + files[0]).toString().split("\n");

  data.splice(0, 0, `window['version']='${args[1]}';`);
  var text = data.join("\n");

  fs.writeFile('./dist/ng-labs/' + files[0], text, function (err) {
    if (err) return err;
  });
}

function readme() {
  return gulp.src('./readme.md')
    .pipe(replace('@version@', args[1]))
    .pipe(gulp.dest('./dist/'));
}

exports.default = series(readme, window);

