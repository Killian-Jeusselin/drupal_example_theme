var gulp 		= require('gulp'),
    imagemin 	= require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant');

// Copy all static images
gulp.task('images', function() {
  return gulp.src(['assets/img/*'])
      .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [pngquant()]
    }))
    .pipe(gulp.dest('dist/img/'))
});

