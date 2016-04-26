var gulp            = require('gulp'),
    autoPrefixer    = require('gulp-autoprefixer'),
    coffee          = require('gulp-coffee'),
    concat          = require('gulp-concat'),
    connect         = require('gulp-connect'),
    refresh         = require('gulp-livereload'),
    minify          = require('gulp-minify'),
    minifyCss       = require('gulp-minify-css'),
    sass            = require('gulp-sass'),
    sourcemaps      = require('gulp-sourcemaps'),
    util            = require('gulp-util'),
    watch           = require('gulp-watch');

var watchingFiles = [
    './index.html',
    './partial/**/*.html',
    './css/**/*.css',
    './js/**/*.js',
    './img/**/*',
    './resources/coffee/**/*.coffee',
    './resources/sass/**/*.scss'
];


gulp.task('server', function () {
    connect.server({
        livereload: true,
        port: 23456,
        root: ['.']
    });
});

gulp.task('livereload', function () {
    gulp.src(watchingFiles)
        .pipe(watch(watchingFiles))
        .pipe(connect.reload());
});

gulp.task('coffee', function () {
    gulp.src('./resources/coffee/*.coffee')
        .pipe(sourcemaps.init())
        .pipe(coffee({
            bare: true
        }).on('error', util.log))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./js/src/'));
});

gulp.task('scripts:minify', function () {
    gulp.src(['./js/src/*Controller.js'])
        .pipe(minify({
            mangle:false
        }))
        //.pipe(concat('app.js'))
        .pipe(gulp.dest('js/src/min'));
});

gulp.task('scripts:concat', function () {
   gulp.src([
            './js/src/min/*-min.js',
            './js/src/CoreApp.js'
        ])
       .pipe(concat('app.js'))
       .pipe(gulp.dest('js/'));
});

gulp.task('scripts', ['scripts:minify','scripts:concat']);

gulp.task('sass', function () {
    gulp.src('./resources/sass/app.scss')
        .pipe(autoPrefixer("last 1 version", "> 1%", "ie 8", "ie 7"))
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./css'));
});

gulp.task('watch', function () {
    gulp.watch('./resources/coffee/*.coffee', ['coffee']);
    gulp.watch('./js/src/*.js', ['scripts:minify']);
    gulp.watch('./js/src/min/*.js', ['scripts:concat']);
    gulp.watch('./resources/sass/**/*.scss', ['sass'])
});

gulp.task('default', [
    'server','livereload',
    'coffee','sass',
    'watch'
]);