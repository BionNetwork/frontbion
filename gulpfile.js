var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('default', function () {
  return gulp.src('app/css/*.css')
    .pipe(concat("bundle.css"))
    .pipe(gulp.dest('DIST/app'));
});
