const gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    del = require('del'),
    babel = require('gulp-babel'),
    runSequence = require('run-sequence'),
    browserSync = require('browser-sync').create(),
    inject = require('gulp-inject');

    // Libs
    gulp.task('vendor-scripts', () => {
      return gulp.src(  [
        'node_modules/angular/angular.js'
      ])
        .pipe(concat('libs.js'))
        .pipe(gulp.dest('dist/scripts'))
        .pipe(browserSync.reload({stream: true}))
        .pipe(notify({ message: 'Vendor scripts task complete' }));
    });

    // File Index.html
    gulp.task('html', ['styles', 'scripts'], () => {
    const injectFiles = gulp.src(['dist/styles/styles.min.css', 'dist/scripts/libs.js', 'dist/scripts/main.min.js']);
    return gulp.src('app/index.html')
      .pipe(inject(injectFiles, {addRootSlash: false, ignorePath: ['src', 'dist']}))
      .pipe(gulp.dest('dist'));
    });

    // Styles
    gulp.task('styles', () => {
      return gulp.src('app/scss/**/*.scss')
        .pipe(sass())
        .pipe(autoprefixer('last 2 version'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(cssnano())
        .pipe(gulp.dest('dist/styles'))
        .pipe(browserSync.reload({stream: true}))
        .pipe(notify({ message: 'Styles task complete' }));
    });

    // Scripts
    gulp.task('scripts', ['vendor-scripts'], () => {
      return gulp.src('app/js/**/*.js')
        .pipe(babel({presets: ['es2015']}))
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('default'))
        .pipe(concat('main.js'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(gulp.dest('dist/scripts'))
        .pipe(browserSync.reload({stream: true}))
        .pipe(notify({ message: 'Scripts task complete' }));
    });

    // Images
    gulp.task('images', () => {
      return gulp.src('app/images/**/*.+(png|jpg|jpeg|gif|svg)')
        .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
        .pipe(gulp.dest('dist/images'))
        .pipe(browserSync.reload({stream: true}))
        .pipe(notify({ message: 'Images task complete' }));
    });

    //fonts
    gulp.task('fonts', () => {
      return gulp.src('app/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'))
        .pipe(browserSync.reload({stream: true}))
        .pipe(notify({ message: 'Fonts task complete' }));
    });

    // browser sync
    gulp.task('browserSync', () => {
      browserSync.init({
        server: {
          baseDir: 'dist'
        },
      })
    });

    // Clean
    gulp.task('clean', () => {
      return del(['dist']);
    });

    // Watch
    gulp.task('watch', ['browserSync'], () => {

      // Watch index.html file
      gulp.watch('app/index.html', ['html']);

      // Watch .scss files
      gulp.watch('app/scss/**/*.scss', ['styles']);

      // Watch .js files
      gulp.watch('app/js/**/*.js', ['scripts']);

      // Watch image files
      gulp.watch('app/images/**/*', ['images']);

      // Watch fonts files
      gulp.watch('app/fonts/**/*', ['fonts']);

    });

    // Default task
    gulp.task('default', (callback) => {
      runSequence('clean', ['images', 'fonts', 'html', 'browserSync', 'watch'], callback)
    });
