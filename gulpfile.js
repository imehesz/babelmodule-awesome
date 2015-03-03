var gulp = require("gulp");
var babel = require("gulp-babel");
var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task("modules", function(){
  browserify({
    entries: "./app.js",
    debug: true
  }).
    transform(babelify).
    bundle().
    pipe(source("app.js")).
    pipe(gulp.dest("target/"));
});

gulp.task("copyIndex", function(){
  gulp.src(["index.html"])
    .pipe(gulp.dest("target/"));
});

gulp.task("watchJs", function(){
  gulp.watch(["app.js", "modules/**/*.js", "index.html"], ["build"]);
});

gulp.task("build", ["modules","copyIndex"]);
gulp.task("default", ["build","watchJs"]);
