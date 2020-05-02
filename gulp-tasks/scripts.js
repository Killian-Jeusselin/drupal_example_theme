var gulp 		= require('gulp'),
	uglify 		= require('gulp-uglify'),
    concat 		= require('gulp-concat'),
    plumber     = require('gulp-plumber');

gulp.task('scripts', function() {
  // Minify and copy all JavaScript (except vendor scripts)
  // with sourcemaps all the way down
  return gulp.src(['assets/js/vendors/*.js', 'assets/js/main.js'])
    .pipe(plumber())
    .pipe(uglify())
    .pipe(concat('main.min.js'))
    .pipe(plumber.stop())
    .pipe(gulp.dest('dist/js'))
});
