const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const open = require('gulp-open');

// Задача для компиляции SCSS-файлов в CSS-файлы и их объединения
function compileSass() {
    return gulp.src('src/sass/**/*.scss')
        .pipe(sass())
        .pipe(concat('style.min.css'))
        .pipe(cleanCSS())
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.stream());
}

// Задача для запуска локального сервера и отслеживания изменений в файлах
function serve() {
    browserSync.init({
        server: {
        baseDir: './src'
        }
    });
    gulp.watch('src/sass/**/*.scss', compileSass);
    gulp.watch('src/**/*.*').on('change', browserSync.reload);
}

exports.default = gulp.series(compileSass, serve);