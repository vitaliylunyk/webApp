const gulp = require('gulp');
const babel = require('gulp-babel');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const del = require('del');
const runSequence = require('run-sequence');

gulp.task('sass', () => {
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('browserSync', () => {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
});

gulp.task('fonts', () => {
  return gulp.src('app/fonts/**/*')
  .pipe(gulp.dest('dist/fonts'))
});

gulp.task('clean:dist', () => {
  return del.sync('dist');
});

gulp.task('build', (callback) => {
  runSequence('clean:dist',
    ['sass', 'images', 'fonts'],
    callback
  )
});

gulp.task('default', (callback) => {
  runSequence(['sass','browserSync', 'watch'],
    callback
  )
});

gulp.task('watch', () => {
  gulp.watch('app/scss/**/*.scss', ['sass']);
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);
});
