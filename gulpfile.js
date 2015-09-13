/**
 *              _      _        _ _
 *             (_)    | |      (_) |
 *   __ _ _   _ _  ___| | _____ _| |_   _____ _ __
 *  / _` | | | | |/ __| |/ / __| | \ \ / / _ \ '__|
 * | (_| | |_| | | (__|   <\__ \ | |\ V /  __/ |
 *  \__, |\__,_|_|\___|_|\_\___/_|_| \_/ \___|_|
 *     | |
 *     |_|
 *
 *    Author: Jaydn de Graaf
 *    Email: jd@pinc.nz
 */

/*jshint esnext: true */

'use strict';

var root          = './mysite/',
    app           = root + 'app/',
    dist          = root + 'dist/',
    prod          = false,
    buildID       = 1,
    sprites       = [app + '*/@1x/*.png'],
    retinasprites = [app + '*/@2x/*.png'],
    gulp          = require("gulp"),
    size          = require('gulp-size'),
    gulpif        = require("gulp-if"),
    gutil         = require("gulp-util"),
    chalk         = require("chalk");

//-----------------------------------------------------------
//-----------------------------------------------------------
// JS
//-----------------------------------------------------------
//-----------------------------------------------------------
var babel = require("gulp-babel");
var rename = require("gulp-rename");
var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var uglify = require("gulp-uglify");
var watchify = require("watchify");
var notify = require("gulp-notify");
var bytediff = require('gulp-bytediff');
var jshint = require("gulp-jshint");

function compileScripts(watch) {
    var props = watchify.args;
    props.entries = [app + 'js/components/app.js'];
    props.debug = true;

    var bundler = watch ? watchify(browserify(props)) : browserify(props);

    bundler.transform(babelify);

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
    });
    return rebundle();

}

gulp.task('lint', function () {
    Message('lint', 'blue');
    return gulp.src(app + 'js/components/app.js')
        .pipe(jshint({
            lookup: true,
            esnext: true
        }))
        .pipe(jshint.reporter('jshint-stylish'))
});

gulp.task('minify-js', function () {
    return gulp.src([dist + 'js/output.js'])
        .pipe(bytediff.start())
        .pipe(uglify())
        .pipe(strip())
        .pipe(rename({
            extname: '.min.js'
        }))
        .pipe(bytediff.stop())
        .pipe(gulp.dest(dist + 'js/'))
});

var minifyCss = require('gulp-cssmin');

gulp.task('minify-css', ['sass'], function () {
    return gulp.src([dist + 'styles/style.css'])
        .pipe(bytediff.start())
        .pipe(strip())
        .pipe(minifyCss())
        .pipe(rename({
            extname: '.min.css'
        }))
        .pipe(bytediff.stop())
        .pipe(gulp.dest(dist + 'styles/'))
});

// ----------------------------------------------------------
// ----------------------------------------------------------
// Sass
//-----------------------------------------------------------
//-----------------------------------------------------------
var sass         = require('gulp-sass'),
    order        = require("gulp-order"),
    concat       = require("gulp-concat"),
    cssmin       = require("gulp-cssmin"),
    plumber      = require("gulp-plumber"),
    sourcemaps   = require("gulp-sourcemaps"),
    autoprefixer = require("gulp-autoprefixer"),
    strip        = require('gulp-strip-comments');

gulp.task('sass', function () {
    return gulp.src([app + 'styles/**/*.scss'])
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(order())
        .pipe(concat('style.scss'))
        .pipe(gulpif(prod, sass({outputStyle: 'compressed'}), sass({outputStyle: 'nested'})))
        .on('error', sass.logError)
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade : true
        }))
        .pipe(gulpif(prod, cssmin()))
        .pipe(sourcemaps.write('./'))
        .pipe(plumber.stop())
        .pipe(gulp.dest(dist + 'styles'))
});

//-----------------------------------------------------------
//-----------------------------------------------------------
// Sprites
//-----------------------------------------------------------
//-----------------------------------------------------------
var imagemin    = require('gulp-imagemin'),
    spritesmith = require('gulp.spritesmith'),
    pngquant    = require('imagemin-pngquant');

gulp.task('sprites', function () {

    //-------------------------------------------------------
    //-------------------------------------------------------
    //  Standard Sprites
    //-------------------------------------------------------
    //-------------------------------------------------------
    var spriteData = gulp.src(sprites).pipe(spritesmith({
        padding    : 4,
        imgName    : 'sprites.png',
        cssName    : '01-sprites.scss',
        cssTemplate: app + 'images/@1x/sprite_positions.styl.mustache'
    }));

    spriteData.img
        .pipe(bytediff.start())
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}]
        }))
        .pipe(bytediff.stop())
        .pipe(gulp.dest(dist + 'images'));

    spriteData.css.pipe(gulp.dest(app + 'styles/01-Sprites'));

    //-------------------------------------------------------
    //-------------------------------------------------------
    // Retina Sprites
    //-------------------------------------------------------
    //-------------------------------------------------------
    var retinaSpriteData = gulp.src(retinasprites).pipe(spritesmith({
        padding    : 8,
        imgName    : 'sprites-retina.png',
        cssName    : '02-sprites-retina.scss',
        cssTemplate: app + 'images/@2x/retina-sprite_positions.styl.mustache'
    }));

    retinaSpriteData.img
        .pipe(bytediff.start())
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}]
        }))
        .pipe(bytediff.stop())
        .pipe(gulp.dest(dist + 'images'));

    retinaSpriteData.css.pipe(gulp.dest(app + 'styles/01-Sprites'));

});

// -----------------------------------------------------------
// SVG
//-----------------------------------------------------------
var svgmin = require('gulp-svgmin');

gulp.task('svg', function () {
    return gulp.src(app + 'images/svg/*.svg')
        .pipe(svgmin({
            options: {
                plugins: [
                    {removeViewBox: false}
                ]
            }
        }))
        .pipe(gulp.dest(dist + 'images/svg/'));
});

//-----------------------------------------------------------
// IE8 Media Query removal
//-----------------------------------------------------------

var rework = require('gulp-rework');
var queryless = require('css-queryless');

// CSS
gulp.task('ie', function () {
    var keepmatches = [
        'screen and (min-width: 768px)',
        'screen and (min-width: 1024px)'
    ];

    gulp.src([dist + 'styles/style.css'])
        .pipe(rework(queryless(keepmatches)))
        .pipe(rename({
            suffix: '.ie'
        }))
        .pipe(gulp.dest(dist + 'styles/'))

});


gulp.task('start', function () {
    Message('start', 'yellow');
});

// -----------------------------------------------------------
// -----------------------------------------------------------
// Task Declaration
//------------------------------------------------------------
//------------------------------------------------------------
var gulpSequence = require('gulp-sequence');

var changeEvent = function (evt) {
    gutil.log('File', chalk['green'](evt.path.replace(/^.*\/(?=[^\/]*$)/, '')), 'was', chalk['green'](evt.type));
};


gulp.task('finishing', function () {
    Message('scss', 'green');
    Message('js', 'green');
    Message('checklist', 'green');
});

gulp.task('default', ['start', 'sprites', 'sass'], function () {

    // JS watch script
    compileScripts(true);

    // SASS Watch task
    gulp.watch([app + 'styles/**/*.scss'], ['sass']).on('change', function (evt) {
        changeEvent(evt);
    });
    // JS Lint task
    gulp.watch([app + 'js/components/app.js'], ['lint']).on('change', function (evt) {
        changeEvent(evt);
    });
});

gulp.task('deploy', function (cb) {
    compileScripts(false);
    gulpSequence(['start'], ['sprites'], ['sass'], ['svg'], ['ie'], ['minify-css'], ['minify-js'], ['finishing'])(cb);

});

function Message(message, col) {
    var color = (col != undefined) ? col : 'yellow';
    var msg = '';
    for (var i in Messages[message]) {
        msg += Messages[message][i]
    }
    gutil.log(chalk[color](msg));
}

var Messages = {
    start    : [
        ' ██████╗ ██╗   ██╗██╗ ██████╗██╗  ██╗███████╗██╗██╗    ██╗   ██╗███████╗██████╗',
        '\n           ██╔═══██╗██║   ██║██║██╔════╝██║ ██╔╝██╔════╝██║██║    ██║   ██║██╔════╝██╔══██╗',
        '\n           ██║   ██║██║   ██║██║██║     █████╔╝ ███████╗██║██║    ██║   ██║█████╗  ██████╔╝',
        '\n           ██║▄▄ ██║██║   ██║██║██║     ██╔═██╗ ╚════██║██║██║    ╚██╗ ██╔╝██╔══╝  ██╔══██╗',
        '\n           ╚██████╔╝╚██████╔╝██║╚██████╗██║  ██╗███████║██║███████╗╚████╔╝ ███████╗██║  ██║',
        '\n            ╚══▀▀═╝  ╚═════╝ ╚═╝ ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝╚══════╝ ╚═══╝  ╚══════╝╚═╝  ╚═╝'
    ],
    scss     : [
        '╔═══════════════════════════╗',
        '\n           ║ Sass compiled Succesfully ║',
        '\n           ╚═══════════════════════════╝'
    ],
    js       : [
        '╔════════════════════════╗',
        '\n           ║ JS bundled Succesfully ║',
        '\n           ╚════════════════════════╝'
    ],
    error    : [
        '╔═══════════════════════╗',
        '\n           ║ An error has occurred ║',
        '\n           ╚═══════════════════════╝'
    ],
    lint     : [
        '╔════════════╗',
        '\n           ║ JS Linting ║',
        '\n           ╚════════════╝'
    ],
    checklist: [
        '╔═══════════════════╗',
        '\n           ║ Go live checklist ║',
        '\n           ╚═══════════════════╝',
        '\n           ☑ External font\'s have been included',
        '\n           ☑ Favicons have been generated and included',
        '\n           ☑ Analytics software is monitoring site',
        '\n           ☑ JavaScript files are minified',
        '\n           ☑ CSS files are minified',
        '\n           ☑ All images have alt tag values',
        '\n           ☑ !important is avoided',
        '\n           ☑ No base files have been overwritten',
        '\n           ☑ 404 Page has been styled',
        '\n           ☑ Common meta tags',
        '\n           ☑ Autoprefixer'
    ]
};
