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
      return gulp.src([
        'node_modules/angular/angular.min.js',
        'node_modules/angular-route/angular-route.min.js',
        'node_modules/angular-ui-router/release/angular-ui-router.min.js',
        'node_modules/ng-dialog/js/ngDialog.min.js'
      ])
        .pipe(gulp.dest('dist/scripts'))
        .pipe(browserSync.reload({stream: true}))
        .pipe(notify({ message: 'Vendor scripts task complete' }));
    });

    //libs styles
    gulp.task('vendor-styles', () => {
      return gulp.src([
        'node_modules/ng-dialog/css/ngDialog.min.css',
        'node_modules/ng-dialog/css/ngDialog-theme-default.min.css'
      ])
        .pipe(gulp.dest('dist/styles'))
        .pipe(browserSync.reload({stream: true}))
        .pipe(notify({ message: 'Vendor scripts task complete' }));
    });

    // File Index.html
    gulp.task('html', ['views', 'styles', 'scripts'], () => {
    const injectFiles = gulp.src([
      'dist/styles/*.css',
      'dist/scripts/angular.min.js',
      'dist/scripts/angular-route.min.js',
      'dist/scripts/ngDialog.min.js',
      'dist/scripts/main.min.js'
    ]);
    return gulp.src('app/index.html')
      .pipe(inject(injectFiles, {addRootSlash: false, ignorePath: ['dist']}))
      .pipe(browserSync.reload({stream: true}))
      .pipe(gulp.dest('dist'));
    });

    //views
    gulp.task('views', () => {
    return gulp.src('app/assets/**/*.html')
    .pipe(browserSync.reload({stream: true}))
      .pipe(gulp.dest('dist'));
    });

    // Styles
    gulp.task('styles', ['vendor-styles'], () => {
      return gulp.src('app/style/styles.scss')
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
      return gulp.src(['app/js/**/*.js', 'app/assets/**/*.js'])
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
      return gulp.src('app/images/**/*.+(png|jpg|jpeg|gif|svg|ico)')
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

      // Watch .html files
      gulp.watch('app/assets/**/*.html', ['views']);

      // Watch .scss files
      gulp.watch('app/**/*.scss', ['styles']);

      // Watch .js files
      gulp.watch('app/**/*.js', ['scripts']);

      // Watch image files
      gulp.watch('app/images/**/*', ['images']);

      // Watch fonts files
      gulp.watch('app/fonts/**/*', ['fonts']);

    });

    // Default task
    gulp.task('default', (callback) => {
      runSequence('clean', ['images', 'fonts', 'html', 'watch', 'browserSync',], callback)
    });
