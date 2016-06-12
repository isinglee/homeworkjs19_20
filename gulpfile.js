/*jslint node: true */
'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var spritesmith = require('gulp.spritesmith');

var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');

var jsFiles = 'js/src/**/*.js',
    jsDest = 'js/',
    scssFiles = 'css/scss/main.scss',
    cssDest = 'css/';

gulp.task('default', function () {
    return console.log('\n\nUse "gulp scripts" or "gulp css" to minify scripts or css\n\n');
});

gulp.task('scripts', function () {
    return gulp.src(jsFiles)
        .pipe(concat('script.main.js'))
        .pipe(gulp.dest(jsDest))
        .pipe(rename('script.main.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(jsDest));
});

gulp.task('scripts:watch', function () {
    gulp.watch('./js/src/**/*.js', ['scripts']);
});

gulp.task('css', function () {
    return gulp.src(scssFiles)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(cssDest))
        .pipe(rename('main.min.css'))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest(cssDest));
});

gulp.task('css:watch', function () {
    gulp.watch('./css/scss/**/*.scss', ['css']);
});

gulp.task('sprite', function () {
    var spriteData = gulp.src('./img/icons/*.*')
        .pipe(spritesmith({
            imgName: 'sprite.png',
            imgPath: '../img/sprite.png',
            cssName: 'sprite.scss',
            cssVarMap: function (sprite) {
                sprite.name = 'icon-' + sprite.name;
            }
        }));

    spriteData.img.pipe(gulp.dest('./img/'));
    spriteData.css.pipe(gulp.dest('./css/scss/'));
});
