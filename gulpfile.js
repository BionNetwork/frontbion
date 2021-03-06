var gulp = require('gulp'),
    concat = require('gulp-concat'),
    connect = require('gulp-connect'),
    htmllint = require('gulp-htmllint'),
    gutil = require('gulp-util'),
    less = require('gulp-less'),
    svgSymbols = require('gulp-svg-symbols'),
    svgmin = require('gulp-svgmin'),
    cheerio = require('gulp-cheerio'),
    replace = require('gulp-replace'),
    paths = {
      static: 'dist',
      less: ['app/**/*.less', 'app/*.less'], distLess: 'dist/css', distStyles: 'dist',
      templates: 'app/**/*.html', distTemplates: 'dist',
      css: ['app/assets/css/**/*', 'app/css/*'], distCSS: 'dist/less',
      fonts: ['app/assets/fonts/**/*', 'app/fonts/*'], distFonts: 'dist/fonts',
      images: ['app/assets/img/**/*', 'app/img/*'], distImages: 'dist/img',
      js: ['app/assets/js/**/*', 'app/js/*'], distJs: 'dist/js',
      scripts: 'app/**/*.js', distScript: 'dist',
      distStylesFilename: 'less.style.css', distScriptFilename: 'app.js',
      dist: 'dist/**/*',
      distWatch: [
      	'dist/components/**/*', 'dist/components/*',
        'dist/css/**/*', 'dist/css/*',
        'dist/js/**/*', 'dist/js/*',
        'dist/fonts/**/*', 'dist/fonts/*',
        'dist/img/**/*', 'dist/img/*',
        'dist/route/**/*', 'dist/route/*',
        'dist/shared/**/*', 'dist/shared/*',
        'dist/app.js', 'dist/*.html'
      ]

    };

gulp.task('less', function () {
  return gulp
    .src(paths.less)
    .pipe(less())
    .pipe(concat(paths.distStylesFilename))
    .pipe(gulp.dest(paths.distLess))
    .pipe(connect.reload());
});

gulp.task('scripts', function() {
  return gulp
    .src(paths.scripts)
    .pipe(concat(paths.distScriptFilename))
    .pipe(gulp.dest(paths.distScript))
    .pipe(connect.reload());
});

gulp.task('css', function () {
  return gulp.src(paths.css)
    .pipe(gulp.dest(paths.distCSS))
    .pipe(connect.reload());
});

gulp.task('templates', function() {
  return gulp
    .src(paths.templates)
    .pipe(gulp.dest(paths.distTemplates))
    .pipe(connect.reload())
    .pipe(connect.reload());
});

gulp.task('fonts', function() {
  return gulp
    .src(paths.fonts)
    .pipe(gulp.dest(paths.distFonts))
    .pipe(connect.reload());
});

gulp.task('images', function() {
  return gulp
    .src(paths.images)
    .pipe(gulp.dest(paths.distImages))
    .pipe(connect.reload());
});

gulp.task('sprite', function () {
  return gulp.src('app/assets/img/icons/*.svg')
    .pipe(svgmin({
        js2svg: {
            pretty: true
        }
    }))
    .pipe(cheerio({
      run: function ($) {
        $('[fill]').removeAttr('fill');
        $('[style]').removeAttr('style');
      },
      parserOptions: { xmlMode: true }
    }))
    .pipe(replace('&gt;', '>'))
    .pipe(svgSymbols({
        svgClassname: 'svg-icon'
    }))
    .pipe(gulp.dest('app/assets/img'));
});

// gulp.task('html-lint', function() {
//     return gulp
//       .src(paths.templates)
//       .pipe(htmllint({}, htmllintReporter));
// });
//
// function htmllintReporter(filepath, issues) {
//     if (issues.length > 0) {
//         issues.forEach(function (issue) {
//             gutil.log(gutil.colors.cyan('[gulp-htmllint] ') + gutil.colors.white(filepath + ' [' + issue.line + ',' + issue.column + ']: ') + gutil.colors.red('(' + issue.code + ') ' + issue.msg));
//         });
//         process.exitCode = 1;
//     }
// }

gulp.task('js', function() {
  return gulp
    .src(paths.js)
    .pipe(gulp.dest(paths.distJs))
    .pipe(connect.reload());
});

gulp.task('build', ['fonts', 'images', 'less', 'css', 'js', 'templates', 'scripts']);

gulp.task('connect', function() {
  connect.server({
    root: paths.static,
    livereload: true
  });
});

gulp.task('watch', function() {
  gulp.watch([paths.scripts], ['scripts']);
  gulp.watch([paths.templates], ['templates']);
  gulp.watch([paths.fonts], ['fonts']);
  gulp.watch([paths.images], ['images']);
  gulp.watch([paths.less], ['less']);
  gulp.watch([paths.css], ['css']);
  gulp.watch([paths.js], ['js']);
});

gulp.task('default', ['build', 'watch', 'connect']);
