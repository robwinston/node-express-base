const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');

gulp.task('default', function() {
  // Run ESLint
  gulp.src(["es6/**/*.js"])
    .pipe(eslint())
    .pipe(eslint.format());
  // Transpile
  gulp.src("es6/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest("public/dist"));
});

