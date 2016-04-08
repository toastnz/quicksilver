/**
 *╔══════════════════════════════════════════════════════╗
 *║                                                      ║
 *║                 _      _        _ _                  ║
 *║                (_)    | |      (_) |                 ║
 *║      __ _ _   _ _  ___| | _____ _| |_   _____ _ __   ║
 *║     / _` | | | | |/ __| |/ / __| | \ \ / / _ \ '__|  ║
 *║    | (_| | |_| | | (__|   <\__ \ | |\ V /  __/ |     ║
 *║     \__, |\__,_|_|\___|_|\_\___/_|_| \_/ \___|_|     ║
 *║        | |                                           ║
 *║        |_|                                           ║
 *║                                                      ║
 *║       Author: Jaydn de Graaf                         ║
 *║       Email: jd@pinc.nz                              ║
 *║                                                      ║
 *╚══════════════════════════════════════════════════════╝
 */

'use strict';

var root          = './mysite/',
    app           = root + 'app/',
    dist          = root + 'dist/',
    sprites       = [app + '*/@1x/*.png'],
    retinasprites = [app + '*/@2x/*.png'],
    gulp          = require("gulp"),
    gutil         = require("gulp-util"),
    chalk         = require("chalk");

//╔═══════════════════════════════╗
//║                               ║
//║   JAVASCRIPT FUNCTIONALITY    ║
//║                               ║
//╚═══════════════════════════════╝
var rename     = require("gulp-rename"),
    babelify   = require('babelify'),
    browserify = require('browserify'),
    source     = require('vinyl-source-stream'),
    uglify     = require("gulp-uglify"),
    watchify   = require("watchify");

function compileScripts(watch) {
    var props = watchify.args;
    props.entries = [app + 'js/components/app.js'];
    props.debug = true;

    var bundler = watch ? watchify(browserify(props)) : browserify(props);

    bundler.transform(babelify, {presets: ['es2015']});

    function rebundle() {
        var stream = bundler.bundle();
        return stream.on('error', function (error) {
                Message('error', 'red');
                gutil.log(chalk['red'](error.message));
            })
            .pipe(source('output.js'))
            .pipe(gulp.dest(dist + 'js'));
    }

    bundler.on('update', function () {
        rebundle();
        Message('js', 'green');
        gutil.log('Gulp.js:', gutil.colors.green('• Bundling all Javascript files with browserify'));
    });
    return rebundle();

}

/**
 *  Minify the JS output
 */

gulp.task('minify-js', function () {
    gutil.log('Gulp.js:', gutil.colors.green('• Minifying Javascript output'));
    return gulp.src([dist + 'js/output.js'])
        .pipe(uglify()).pipe(rename({extname: '.min.js'})).pipe(gulp.dest(dist + 'js/'))
});


//╔═══════════════════════════════╗
//║                               ║
//║    STYLESHEET MANIPLUATION    ║
//║                               ║
//╚═══════════════════════════════╝
var sass         = require('gulp-sass'),
    order        = require("gulp-order"),
    concat       = require("gulp-concat"),
    cssmin       = require("gulp-cssmin"),
    plumber      = require("gulp-plumber"),
    sourcemaps   = require("gulp-sourcemaps"),
    autoprefixer = require("gulp-autoprefixer");

/**
 *  Minify the compiled CSS
 */

gulp.task('minify-css', ['sass'], function () {
    gutil.log('Gulp.js:', gutil.colors.green('• Minifying the CSS files'));
    return gulp.src([dist + 'styles/style.css']).pipe(cssmin()).pipe(rename({extname: '.min.css'})).pipe(gulp.dest(dist + 'styles/'))
});
gulp.task('sass', function () {
    gutil.log('Gulp.js:', gutil.colors.green('• Compiling the combined stylesheets'));
    var autoprefixerSettings = {
        browsers: ['last 5 versions'],
        cascade : true
    };
    return gulp.src([app + 'styles/**/*.scss']).pipe(plumber()).pipe(sourcemaps.init()).pipe(order()).pipe(concat('style.scss')).pipe(sass({outputStyle: 'compressed'})).on('error', sass.logError).pipe(autoprefixer(autoprefixerSettings)).pipe(sourcemaps.write('./')).pipe(plumber.stop()).pipe(gulp.dest(dist + 'styles'))
});

//╔═══════════════════════════════╗
//║                               ║
//║      SPRITESHEET CREATION     ║
//║                               ║
//╚═══════════════════════════════╝
var spritesmith = require('gulp.spritesmith');

gulp.task('sprites', function () {
    gutil.log('Gulp.js:', gutil.colors.green('• Creating the spritesheets and associated styles'));
    /**
     *  Standard Sprites
     */
    var spriteData = gulp.src(sprites).pipe(spritesmith({
        padding    : 4,
        imgName    : 'sprites.png',
        cssName    : '01-sprites.scss',
        cssTemplate: app + 'images/@1x/sprite_positions.styl.mustache'
    }));

    spriteData.img.pipe(gulp.dest(dist + 'images'));

    spriteData.css.pipe(gulp.dest(app + 'styles/01-Sprites'));

    /**
     *  Retina Sprites
     */
    var retinaSpriteData = gulp.src(retinasprites).pipe(spritesmith({
        padding    : 8,
        imgName    : 'sprites-retina.png',
        cssName    : '02-sprites-retina.scss',
        cssTemplate: app + 'images/@2x/retina-sprite_positions.styl.mustache'
    }));

    retinaSpriteData.img.pipe(gulp.dest(dist + 'images'));

    retinaSpriteData.css.pipe(gulp.dest(app + 'styles/01-Sprites'));

});

/**
 *  IE8 Stylesheet fixer
 */

var rework    = require('gulp-rework'),
    queryless = require('css-queryless');

gulp.task('ie', function () {
    gutil.log('Gulp.js:', gutil.colors.green('• Making IE safe stylesheet'));
    var keepmatches = [
        'screen and (min-width: 768px)',
        'screen and (min-width: 1024px)'
    ];

    gulp.src([dist + 'styles/style.css']).pipe(rework(queryless(keepmatches))).pipe(rename({suffix: '.ie'})).pipe(gulp.dest(dist + 'styles/'))
});


gulp.task('start', function () {
    Message('start', 'green');
});

//╔═══════════════════════════════╗
//║                               ║
//║       FLAT CMS THEME          ║
//║                               ║
//╚═══════════════════════════════╝

var cms = './flat-cms/';

gulp.task('cms', function () {
    gutil.log('Gulp.js:', gutil.colors.green('• Compiling the CMS stylesheets'));
    var autoprefixerSettings = {
        browsers: ['last 5 versions'],
        cascade : true
    };
    return gulp.src([cms + 'styles/scss/*.scss']).pipe(plumber()).pipe(sourcemaps.init()).pipe(order()).pipe(concat('flat-cms.scss')).on('error', sass.logError).pipe(sass({outputStyle: 'compressed'})).pipe(autoprefixer(autoprefixerSettings)).pipe(sourcemaps.write('./')).pipe(plumber.stop())
        .pipe(gulp.dest(cms + 'styles/css'))
});


//╔═══════════════════════════════╗
//║                               ║
//║        TASK DECLARATION       ║
//║                               ║
//╚═══════════════════════════════╝

var gulpSequence = require('gulp-sequence');

var changeEvent = function (evt) {
    gutil.log('File', chalk['blue'](evt.path.replace(/^.*\/(?=[^\/]*$)/, '')), 'was', chalk['blue'](evt.type));
};

gulp.task('finishing', function () {
    Message('scss', 'green');
    Message('js', 'green');
    Message('checklist', 'green');
});

gulp.task('default', ['start', 'sprites', 'sass', 'ie'], function () {

    compileScripts(true);

    gulp.watch([app + 'styles/**/*.scss'], ['sass']).on('change', function (evt) {
        changeEvent(evt);
    });

    gulp.watch([app + 'js/components/app.js']).on('change', function (evt) {
        changeEvent(evt);
    });

});

gulp.task('deploy', function (cb) {
    compileScripts(false);
    gulpSequence(['start'], ['cms'], ['sprites'], ['sass'], ['ie'], ['minify-css'], ['minify-js'], ['finishing'])(cb);

});

function Message(message, col) {
    var color = (col != undefined) ? col : 'yellow';
    gutil.log(chalk[color](Messages[message]));
}

var Messages = {
    start    : ' ██████╗ ██╗   ██╗██╗ ██████╗██╗  ██╗███████╗██╗██╗    ██╗   ██╗███████╗██████╗\n           ██╔═══██╗██║   ██║██║██╔════╝██║ ██╔╝██╔════╝██║██║    ██║   ██║██╔════╝██╔══██╗\n           ██║   ██║██║   ██║██║██║     █████╔╝ ███████╗██║██║    ██║   ██║█████╗  ██████╔╝\n           ██║▄▄ ██║██║   ██║██║██║     ██╔═██╗ ╚════██║██║██║    ╚██╗ ██╔╝██╔══╝  ██╔══██╗\n           ╚██████╔╝╚██████╔╝██║╚██████╗██║  ██╗███████║██║███████╗╚████╔╝ ███████╗██║  ██║\n            ╚══▀▀═╝  ╚═════╝ ╚═╝ ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝╚══════╝ ╚═══╝  ╚══════╝╚═╝  ╚═╝',
    scss     : '╔═══════════════════════════╗\n           ║ Sass compiled Succesfully ║\n           ╚═══════════════════════════╝',
    js       : '╔════════════════════════╗\n           ║ JS bundled Succesfully ║\n           ╚════════════════════════╝',
    error    : '╔═══════════════════════╗\n           ║ An error has occurred ║\n           ╚═══════════════════════╝',
    checklist: '╔═══════════════════╗\n           ║ Go live checklist ║\n           ╚═══════════════════╝\n           ☑ External font\'s have been included\n           ☑ Favicons have been generated and included\n           ☑ Analytics software is monitoring site\n           ☑ JavaScript files are minified\n           ☑ CSS files are minified\n           ☑ All images have alt tag values\n           ☑ !important is avoided\n           ☑ No base files have been overwritten\n           ☑ 404 Page has been styled\n           ☑ Common meta tags\n           ☑ Autoprefixer\n           ☑ Login page has been styled'
};
