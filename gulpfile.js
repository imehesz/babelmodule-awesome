var gulp = require("gulp");
var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var sass = require("gulp-sass");
var sourceMaps = require("gulp-sourcemaps");

gulp.task("sass", function(){
  gulp.src("modules/style.scss")
    .pipe(sourceMaps.init())
      .pipe(sass())
    .pipe(sourceMaps.write())
    .pipe(gulp.dest("target"));
});

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
  gulp.watch(["app.js", "modules/**/*.js", "modules/**/*.scss", "index.html"], ["build"]);
});

gulp.task("build", ["modules","sass", "copyIndex"]);
gulp.task("default", ["build","watchJs"]);