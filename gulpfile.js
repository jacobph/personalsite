var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
//ar ugilfy = require('gulp-ugilfy');

gulp.task('styles', function() {
  gulp.src('css/scss/everything.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS({ compatibility: 'ie8' }))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
    .pipe(concat('jacob.min.css'))
    .pipe(gulp.dest('css/'))
});

gulp.task('js', function() {
    gulp.src(['js/vendor/instaclick.js', 'js/jacob.js'])
      //.pipe(uglify())
			.pipe(concat('jacob.min.js'))
    	.pipe(gulp.dest('js/min/'));
});

//default task
gulp.task('default', function() {
  gulp.watch('css/scss/*', ['styles']);
  gulp.watch('js/*', ['js']);
});