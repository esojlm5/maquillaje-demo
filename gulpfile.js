const gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    jshint = require('gulp-jshint'),
    plumber = require('gulp-plumber'),
    concat = require('gulp-concat'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload,
    pug = require('gulp-pug'),
    imagemin = require('gulp-imagemin');

var dist = './public/assets/';
// node modules folder
var modules = './node_modules/';
// var plugins path: (check theme plugins before of add new plugins)
var plugins = [
    modules + 'vue/dist/vue.js',
    modules + 'slick-carousel/slick/slick.js'
];
var stylesplugin =[
    modules + 'slick-carousel/slick/slick.scss'
]
var src = './src/';
var scripts = [
    src + 'js/functions.js',
    src + 'js/main.js'
];
gulp.task('pug',() =>
    gulp.src('src/*.pug')
    .pipe(pug({
        pretty:true
    }))
    .on('error', console.error.bind(console))
    .pipe(browserSync.stream())
    .pipe(gulp.dest('./public'))
);
gulp.task('sass', function(){
    css_mapping = src + 'scss/**/*.scss';
    gulp.src(css_mapping)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle:'compressed'
        }))
        .on('error', console.error.bind(console))
        .pipe(autoprefixer({
        cascade: false
        }))
        .pipe(concat('style.css'))
        .pipe(sourcemaps.write('../maps'))
        .pipe(gulp.dest('public/css'))
        .pipe(browserSync.stream());
});
 gulp.task('images', () =>{
        gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('public/images'))
 });
gulp.task('server', function () {
    browserSync.init({
        server: {
            baseDir: "./public",
            index: "index.html"
        }
    });
    gulp.watch("./public/**/*.*").on("change", reload);
    gulp.watch(src + 'scss/**/*.scss', ['sass']);
    gulp.watch(src + 'js/**/*.js', ['scripts:temp']);
    gulp.watch(src + 'temp/**/*.js', ['scripts:dev']).on('change', reload);
});
// gulp.task('script', function(){
//     // gulp.src([
//     // 'src/js/particle.min.js'] )
//     // .pipe(concat('plugins.js'))
//     // .pipe(uglify())
//     // .pipe(gulp.dest('public/js'));
//
//     gulp.src(scripts)
//     .pipe(concat('main.js'))
//     .pipe(uglify())
//     .on('error', console.error.bind(console))
//     .pipe(gulp.dest('./public/js'))
//     .pipe(browserSync.stream());
// });

// script js
var scriptsTemp = [
    src + 'temp/plugins.js',
    src + 'temp/main.js'
];
// plugins js minify
gulp.task('pluginsjs', function(){
    gulp.src(plugins)
        .pipe(concat('plugins.js'))
        .pipe(uglify())
        .pipe(gulp.dest(src + 'temp/'));
});

gulp.task('scripts:temp', function(){
    gulp.src(scripts)
        .pipe(sourcemaps.init())
        // .pipe(jshint())
        .pipe(plumber())
        // .pipe(jshint.reporter('default'))
        // .pipe(jshint.reporter('fail'))
        .pipe(concat('main.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(src + 'temp/'));
});

gulp.task('scripts:dev', function(){
    gulp.src(scriptsTemp)
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(concat('landing.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(dist + 'js/'));
});

gulp.task('scripts:dist', function(){
    gulp.src(scriptsTemp)
        .pipe(concat('landing.js'))
        .pipe(plumber())
        .pipe(uglify())
        .pipe(gulp.dest(dist + 'js/'));
});
// tasks globals
gulp.task('static', ['pluginsjs', 'scripts:temp']);
gulp.task('build', ['scripts:dev','static']);
gulp.task('default',['build','sass','server'],function() {
    gulp.watch('src/*.pug',['pug']);
    // gulp.watch(src + 'scss/**/*.scss', ['sass']);
    gulp.watch('src/images/**', ['images']);
});