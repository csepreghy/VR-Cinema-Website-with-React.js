var gulp = require('gulp'),
	uglify = require('gulp-uglify');

gulp.task('default', function() {
	gulp.src('build/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('build'))
	})