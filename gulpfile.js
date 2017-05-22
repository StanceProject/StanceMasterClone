var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var sass = require("gulp-sass");
var concat = require("gulp-concat");
var CacheBuster = require("gulp-cachebust");
var print = require("gulp-print");
var babel = require("gulp-babel");
var uglify = require("gulp-uglify");

var cachebust = new CacheBuster;


gulp.task("build-css", function(){
  return gulp.src("frontend/**/*.scss")
  .pipe(sourcemaps.init())
  .pipe(sass())
  .pipe(cachebust.resources())
  .pipe(concat("styles.css"))
  .pipe(sourcemaps.write("./maps"))
  .pipe(gulp.dest("./dist"));
})

gulp.task('build-views', function() {
  return gulp.src('./frontend/views/**/*.html')
  .pipe(gulp.dest('./dist/views'))
})

gulp.task('build-js', function() {
   return gulp.src('frontend/**/*.js')
      .pipe(sourcemaps.init())
      .pipe(print())
      .pipe(babel({ presets: ['es2015'] }))
      .pipe(concat('bundle.js'))
      //.pipe(uglify())
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./dist/js'));
});

gulp.task('build', ['build-css', 'build-js', 'build-views'], function() {
    return gulp.src('index.html')
        .pipe(cachebust.references())
        .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function() {
    return gulp.watch(['./index.html','./partials/*.html', "frontend/**/*.scss", 'frontend/**/*.js'], ['build']);
});
