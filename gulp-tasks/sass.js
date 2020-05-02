var gulp 			= require('gulp'),
	sass 			= require('gulp-sass'),
	globImporter 	= require('node-sass-glob-importer'),
	autoprefixer 	= require('gulp-autoprefixer'),
	cleanCSS 		= require('gulp-clean-css'),
	sourcemaps 		= require('gulp-sourcemaps'),
    pxtorem 		= require('gulp-px2rem');

var px2remOptions = {
	root_value: 16,
	unit_precision: 5,
	prop_white_list: [],
	replace: false,
	media_query: false
};
	
var postCssOptions = {
	map: true  
};

gulp.task('sass', function() {
	return gulp.src(['assets/scss/**/*.scss', 'assets/scss/**/*._scss', 'assets/scss/*.scss'])
        .pipe(sourcemaps.init())
			.pipe(sass({ importer: globImporter() }).on('error', sass.logError))
			.pipe(pxtorem(px2remOptions, postCssOptions))
			.pipe(autoprefixer({
				cascade: false
			}))
			.pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('dist/css'))

});
