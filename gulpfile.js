'use strict';
/*------------------------------------------------------------------
 Project Variables
 ------------------------------------------------------------------*/

var root = './mysite/',
    app = root + 'app/',
    dist = root + 'dist/',
    sprites = [app + 'sprites/*@1x.png'],
    retinasprites = [app + 'sprites/*@2x.png'],
    gulp = require("gulp"),
    gutil = require("gulp-util"),
    chalk = require("chalk");

/*------------------------------------------------------------------
 Javascript
 ------------------------------------------------------------------*/

var rename = require("gulp-rename"),
    babelify = require('babelify'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    uglify = require("gulp-uglify"),
    watchify = require("watchify");

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
    });
    return rebundle();

}

/* Minify the JS output */

gulp.task('minify-js', function () {
    gutil.log('Gulp.js:', gutil.colors.green('• Minifying Javascript output'));
    return gulp.src([dist + 'js/output.js']).pipe(uglify({compress: {unused: false}})).pipe(rename({extname: '.min.js'})).pipe(gulp.dest(dist + 'js/'))
});

/*------------------------------------------------------------------
 Stylesheets
 ------------------------------------------------------------------*/

var sass = require('gulp-sass'),
    order = require("gulp-order"),
    concat = require("gulp-concat"),
    plumber = require("gulp-plumber"),
    cleanCSS = require("gulp-clean-css"),
    sourcemaps = require("gulp-sourcemaps"),
    autoprefixer = require("gulp-autoprefixer");

/* Minify the compiled CSS */

gulp.task('minify-css', ['sass'], function () {
    gutil.log('Gulp.js:', gutil.colors.green('• Minifying the CSS files'));
    return gulp.src([dist + 'styles/style.css']).pipe(cleanCSS({compatibility: 'ie8'})).pipe(rename({extname: '.min.css'})).pipe(gulp.dest(dist + 'styles/'))
});

gulp.task('sass', function () {
    Message('scss', 'green');
    var autoprefixerSettings = {
        browsers: ['last 5 versions'],
        cascade: true
    };
    return gulp.src([app + 'styles/**/*.scss']).pipe(plumber()).pipe(sourcemaps.init()).pipe(order()).pipe(concat('style.scss')).pipe(sass({outputStyle: 'compressed'})).on('error', sass.logError).pipe(autoprefixer(autoprefixerSettings)).pipe(sourcemaps.write('./')).pipe(plumber.stop()).pipe(gulp.dest(dist + 'styles'))
});

/*------------------------------------------------------------------
 Spritesheet Creation
 ------------------------------------------------------------------*/

var spritesmith = require('gulp.spritesmith');
var replace = require('gulp-replace');

gulp.task('sprites', function () {
    gutil.log('Gulp.js:', gutil.colors.green('• Creating the spritesheets and associated styles'));

    /* Standard Sprites */
    var spriteData = gulp.src(sprites).pipe(spritesmith({
        padding: 4,
        imgName: 'sprites.png',
        cssName: '_01-Sprites.scss',
        cssTemplate: app + 'sprites/sprite_positions.styl.mustache'
    }));

    spriteData.img.pipe(gulp.dest(dist + 'images'));

    spriteData.css.pipe(replace('@1x', '')).pipe(gulp.dest(app + 'styles/01-Sprites'));

    /* Retina Sprites */
    var retinaSpriteData = gulp.src(retinasprites).pipe(spritesmith({
        padding: 8,
        imgName: 'sprites-retina.png',
        cssName: '_02-Sprites-retina.scss',
        cssTemplate: app + 'sprites/retina-sprite_positions.styl.mustache'
    }));

    retinaSpriteData.img.pipe(gulp.dest(dist + 'images'));

    retinaSpriteData.css.pipe(replace('@2x', '')).pipe(gulp.dest(app + 'styles/01-Sprites'));

});

/* IE8 Stylesheet fixer */
var rework = require('gulp-rework');
var queryless = require('css-queryless');

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

/*------------------------------------------------------------------
 Flat CMS Theme
 ------------------------------------------------------------------*/

var cms = './flat-cms/';

gulp.task('cms', function () {
    Message('scss', 'green');
    var autoprefixerSettings = {
        browsers: ['last 5 versions'],
        cascade: true
    };
    return gulp.src([cms + 'styles/scss/*.scss']).pipe(plumber()).pipe(sourcemaps.init()).pipe(order()).pipe(concat('flat-cms.scss')).on('error', sass.logError).pipe(sass({outputStyle: 'compressed'})).pipe(autoprefixer(autoprefixerSettings)).pipe(sourcemaps.write('./')).pipe(plumber.stop())
        .pipe(gulp.dest(cms + 'styles/css'))
});

/*------------------------------------------------------------------
 Favicon Generation
 ------------------------------------------------------------------*/

const realFavicon = require('gulp-real-favicon');
const fs = require('fs');

var FAVICON_DATA_FILE = 'faviconData.json';

gulp.task('generate-favicon', function (done) {
    realFavicon.generateFavicon({
        masterPicture: 'icon.png',
        dest: root + 'favicons',
        iconsPath: '/',
        design: {
            ios: {
                pictureAspect: 'noChange'
            },
            desktopBrowser: {},
            windows: {
                pictureAspect: 'noChange',
                backgroundColor: '#da532c',
                onConflict: 'override'
            },
            androidChrome: {
                pictureAspect: 'noChange',
                themeColor: '#ffffff',
                manifest: {
                    name: 'My App',
                    display: 'browser',
                    orientation: 'notSet',
                    onConflict: 'override',
                    declared: true
                }
            },
            safariPinnedTab: {
                pictureAspect: 'silhouette',
                themeColor: '#5bbad5'
            }
        },
        settings: {
            scalingAlgorithm: 'Mitchell',
            errorOnImageTooSmall: false
        },
        markupFile: FAVICON_DATA_FILE
    }, function () {
        done();
    });
});

gulp.task('inject-favicon-markups', function () {
    gulp.src([app + 'templates/includes/Favicons.ss'])
        .pipe(realFavicon.injectFaviconMarkups(JSON.parse(fs.readFileSync(FAVICON_DATA_FILE)).favicon.html_code))
        .pipe(gulp.dest(app + 'favicons'));
});

gulp.task('check-for-favicon-update', function (done) {
    var currentVersion = JSON.parse(fs.readFileSync(FAVICON_DATA_FILE)).version;
    realFavicon.checkForUpdates(currentVersion, function (err) {
        if (err) {
            throw err;
        }
    });
});

/*------------------------------------------------------------------
 Font Awesome Asset Relocation
 ------------------------------------------------------------------*/
gulp.task('fontAwesome', function () {
    gutil.log('Gulp.js:', gutil.colors.green('• Copying the Font Awesome Files'));
    return gulp.src('node_modules/font-awesome/fonts/*').pipe(gulp.dest(dist + 'fonts'))
});

/*------------------------------------------------------------------
 Task Declaration
 ------------------------------------------------------------------*/

var gulpSequence = require('gulp-sequence');

var changeEvent = function (evt) {
    gutil.log('File', chalk['blue'](evt.path.replace(/^.*\/(?=[^\/]*$)/, '')), 'was', chalk['blue'](evt.type));
};

gulp.task('finishing', function () {
    Message('scss', 'green');
    Message('js', 'green');
    Message('checklist', 'green');
});

gulp.task('flat', ['cms'], function () {

    gulp.watch(['**/*.scss'], ['cms']).on('change', function (evt) {
        changeEvent(evt);
    });

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
    gulpSequence(['start'], ['minify-js'], ['cms'], ['sprites'], ['sass'], ['ie'], ['minify-css'], ['fontAwesome'], ['finishing'])(cb);

});

function Message(message, col) {
    var color = (col != undefined) ? col : 'yellow';
    gutil.log(chalk[color](Messages[message]));
}

/*------------------------------------------------------------------
 Output Messages
 ------------------------------------------------------------------*/

var Messages = {
    start: ' ██████╗ ██╗   ██╗██╗ ██████╗██╗  ██╗███████╗██╗██╗    ██╗   ██╗███████╗██████╗\n           ██╔═══██╗██║   ██║██║██╔════╝██║ ██╔╝██╔════╝██║██║    ██║   ██║██╔════╝██╔══██╗\n           ██║   ██║██║   ██║██║██║     █████╔╝ ███████╗██║██║    ██║   ██║█████╗  ██████╔╝\n           ██║▄▄ ██║██║   ██║██║██║     ██╔═██╗ ╚════██║██║██║    ╚██╗ ██╔╝██╔══╝  ██╔══██╗\n           ╚██████╔╝╚██████╔╝██║╚██████╗██║  ██╗███████║██║███████╗╚████╔╝ ███████╗██║  ██║\n            ╚══▀▀═╝  ╚═════╝ ╚═╝ ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝╚══════╝ ╚═══╝  ╚══════╝╚═╝  ╚═╝',
    scss: '╔═══════════════════════════╗\n           ║ Sass compiled Succesfully ║\n           ╚═══════════════════════════╝',
    js: '╔════════════════════════╗\n           ║ JS bundled Succesfully ║\n           ╚════════════════════════╝',
    error: '╔═══════════════════════╗\n           ║ An error has occurred ║\n           ╚═══════════════════════╝',
    checklist: '╔═══════════════════╗\n           ║ Go live checklist ║\n           ╚═══════════════════╝\n           ☑ External font\'s have been included\n           ☑ Favicons have been generated and included\n           ☑ Analytics software is monitoring site\n           ☑ JavaScript files are minified\n           ☑ CSS files are minified\n           ☑ All images have alt tag values\n           ☑ !important is avoided\n           ☑ No base files have been overwritten\n           ☑ 404 Page has been styled\n           ☑ Common meta tags\n           ☑ Autoprefixer\n           ☑ Login page has been styled'
};
