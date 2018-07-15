const gulp = require("gulp");
const sourcemaps = require("gulp-sourcemaps");
const sass = require("gulp-sass");
const concat = require("gulp-concat");
const CacheBuster = require("gulp-cachebust");
const print = require("gulp-print");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");

const cachebust = new CacheBuster;


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

gulp.task('build-images', function() {
  return gulp.src('./frontend/images/**/*')
  .pipe(gulp.dest('./dist/images'))
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

gulp.task('build', ['build-css', 'build-js', 'build-views', 'build-images', 'watch'], function() {
    return gulp.src('index.html')
        .pipe(cachebust.references())
        .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function() {
    return gulp.watch(['./index.html','./frontend/views/**/*.html', "frontend/**/*.scss", 'frontend/**/*.js'], ['build']);
});
