const gulp = require('gulp');
const babel = require('gulp-babel');
const browserify = require('browserify');
const source = require('vinyl-source-stream');

const paths = {
  html: ['./client/html/**/*.html'],
  css: ['./client/css/**/*.css'],
  img: ['./client/img/*'],
  js: ['./client/js/**/*.jsx', './client/js/**/*.js'],
};

gulp.task('img', function() {
  return gulp.src(paths.img)
             .pipe(gulp.dest('./dist/public/client/img'));
})

gulp.task('html', function() {
  return gulp.src(paths.html)
             .pipe(gulp.dest('./dist/public/client/'));
})

gulp.task('css', function() {
  return gulp.src(paths.css)
             .pipe(gulp.dest('./dist/public/client/css'));
});

gulp.task('js', function() {
  return gulp.src(paths.js)
             .pipe(babel())
             .pipe(gulp.dest('./dist/public/client/js'));
});

gulp.task('browserify', ['js'], function() {
  return browserify('./dist/public/client/js/index.js')
            .bundle()
            .pipe(source('bundle.js'))
            .pipe(gulp.dest('./dist/public/client/js'));
});

gulp.task('client', ['img', 'html', 'css', 'browserify']);
gulp.task('default', ['client']);
