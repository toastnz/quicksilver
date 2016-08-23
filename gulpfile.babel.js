/*------------------------------------------------------------------
 Imports
 ------------------------------------------------------------------*/

const fs           = require('fs');
const gulp         = require('gulp');
const chalk        = require('chalk');
const watchify     = require('watchify');
const babelify     = require('babelify');
const sass         = require('gulp-sass');
const gutil        = require('gulp-util');
const browserify   = require('browserify');
const pixrem       = require('gulp-pixrem');
const plumber      = require('gulp-plumber');
const replace      = require('gulp-replace');
const sourcemaps   = require('gulp-sourcemaps');
const spritesmith  = require('gulp.spritesmith');
const autoprefixer = require('gulp-autoprefixer');
const realFavicon  = require('gulp-real-favicon');
const source       = require('vinyl-source-stream');
const bulkSass     = require('gulp-sass-bulk-import');

/*------------------------------------------------------------------
 Config
 ------------------------------------------------------------------*/

const root  = `${__dirname}/mysite/`;
const paths = {
    styles : {
        src : `${root}app/styles/**/*.scss`,
        dest: `${root}dist/styles/`
    },
    scripts: {
        src : `${root}app/js/**/*.js`,
        dest: `${root}dist/js/`
    },
    sprites: {
        standard: `${root}app/sprites/*@1x.png`,
        retina  : `${root}app/sprites/*@2x.png`
    },
    reg    : {
        root: new RegExp(root + 'app/', 'g'),
        dist: new RegExp(root + 'dist/', 'g')
    }
};

/*------------------------------------------------------------------
 Styles
 ------------------------------------------------------------------*/

gulp.task('styles', ()=> {
    return gulp.src(paths.styles.src)
        .pipe(plumber(function (error) {
            gutil.log(`${chalk['yellow'](error.file.toString().replace(paths.reg.root, ''))}`);
            gutil.log(`${chalk['red'](error['messageOriginal'])}`);
            this.emit('end');
        }))
        .pipe(bulkSass())
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(autoprefixer({browsers: ['last 5 versions']}))
        .pipe(pixrem({rootValue: '10px'}))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(paths.styles.dest));
})

/*------------------------------------------------------------------
 Font Awesome Asset Relocation
 ------------------------------------------------------------------*/

gulp.task('font-awesome', function () {
    return gulp.src('node_modules/font-awesome/fonts/*')
        .pipe(gulp.dest(`${root}dist/fonts`))
});

/*------------------------------------------------------------------
 Flat CMS Theme
 ------------------------------------------------------------------*/

const cms = './flat-cms/';

gulp.task('cms', function () {
    Message('scss', 'green');
    return gulp.src([cms + 'styles/scss/*.scss'])
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(order())
        .pipe(concat('flat-cms.scss'))
        .on('error', sass.logError)
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(autoprefixer({browsers: ['last 5 versions']}))
        .pipe(sourcemaps.write('./'))
        .pipe(plumber.stop())
        .pipe(gulp.dest(cms + 'styles/css'))
});

/*------------------------------------------------------------------
 Spritesheet Creation
 ------------------------------------------------------------------*/

gulp.task('sprites', ()=> {
    let spriteData = gulp.src(paths.sprites.standard).pipe(spritesmith({
        padding    : 4,
        imgName    : 'sprites.png',
        cssName    : '_01-Sprites.scss',
        cssTemplate: `${root}app/sprites/sprite_positions.styl.mustache`
    }));
    spriteData.img.pipe(gulp.dest(`${root}dist/images`));
    spriteData.css.pipe(replace('@1x', '')).pipe(gulp.dest(`${root}styles/01-Sprites`));
    let retinaSpriteData = gulp.src(paths.sprites.retina).pipe(spritesmith({
        padding    : 8,
        imgName    : 'sprites-retina.png',
        cssName    : '_02-Sprites-retina.scss',
        cssTemplate: `${root}app/sprites/retina-sprite_positions.styl.mustache`
    }));
    retinaSpriteData.img.pipe(gulp.dest(`${root}dist/images`));
    retinaSpriteData.css.pipe(replace('@2x', '')).pipe(gulp.dest(`${root}styles/01-Sprites`));
});

/*------------------------------------------------------------------
 Scripts
 ------------------------------------------------------------------*/

function compileScripts(watch) {
    let props     = watchify.args;
    props.entries = [`${root}/app/js/components/app.js`];
    props.debug   = true;
    let bundler   = watch ? watchify(browserify(props)) : browserify(props);
    bundler.transform(babelify, {presets: ['es2015']});
    function rebundle() {
        let stream = bundler.bundle();
        return stream.on('error', function (error) {
            gutil.log(`${chalk['yellow'](error.toString().replace(paths.reg.root, ''))}`);
            gutil.log((error['codeFrame']));
            this.emit('end');
        })
            .pipe(source('app.js'))
            .pipe(gulp.dest(paths.scripts.dest));
    }

    bundler.on('update', function () {
        rebundle();
    });
    return rebundle();
}

/*------------------------------------------------------------------
 Favicon Generation
 ------------------------------------------------------------------*/

gulp.task('favicon', function (done) {
    realFavicon.generateFavicon({
        masterPicture: 'icon.png',
        dest         : `${root}favicons`,
        iconsPath    : '/',
        design       : {
            ios            : {
                pictureAspect: 'noChange'
            },
            desktopBrowser : {},
            windows        : {
                pictureAspect  : 'noChange',
                backgroundColor: '#e61b36',
                onConflict     : 'override'
            },
            androidChrome  : {
                pictureAspect: 'noChange',
                themeColor   : '#e61b36',
                manifest     : {
                    name       : 'My App',
                    display    : 'browser',
                    orientation: 'notSet',
                    onConflict : 'override',
                    declared   : true
                }
            },
            safariPinnedTab: {
                pictureAspect: 'silhouette',
                themeColor   : '#e61b36'
            }
        },
        settings     : {
            scalingAlgorithm    : 'Mitchell',
            errorOnImageTooSmall: false
        },
        markupFile   : 'faviconData.json'
    }, function () {
        done();
    });
});

/*------------------------------------------------------------------
 Task Declaration
 ------------------------------------------------------------------*/

gulp.task('start', function () {
    Message('start', 'green');
});

gulp.task('default', ['font-awesome', 'start', 'sprites', 'styles'], function () {
    compileScripts(true);
    gulp.watch([paths.styles.src], ['styles']).on('change', function (evt) {
        Message('scss', 'green');
        gutil.log(chalk['green'](' => ') + chalk['blue'](evt.path.replace(/^.*\/(?=[^\/]*$)/, '')) + ' was ' + chalk['green'](evt.type));
    });
    gulp.watch([`${root}/app/js/components/app.js`]).on('change', function (evt) {
        Message('js', 'green');
        gutil.log(chalk['green'](' => ') + chalk['blue'](evt.path.replace(/^.*\/(?=[^\/]*$)/, '')) + ' was ' + chalk['green'](evt.type));
    });
});

/*------------------------------------------------------------------
 Output Messages
 ------------------------------------------------------------------*/

function Message(message, col) {
    let color = (col != undefined) ? col : 'yellow';
    gutil.log(chalk[color](Messages[message]));
}

const Messages = {
    start: ' ██████╗ ██╗   ██╗██╗ ██████╗██╗  ██╗███████╗██╗██╗    ██╗   ██╗███████╗██████╗\n           ██╔═══██╗██║   ██║██║██╔════╝██║ ██╔╝██╔════╝██║██║    ██║   ██║██╔════╝██╔══██╗\n           ██║   ██║██║   ██║██║██║     █████╔╝ ███████╗██║██║    ██║   ██║█████╗  ██████╔╝\n           ██║▄▄ ██║██║   ██║██║██║     ██╔═██╗ ╚════██║██║██║    ╚██╗ ██╔╝██╔══╝  ██╔══██╗\n           ╚██████╔╝╚██████╔╝██║╚██████╗██║  ██╗███████║██║███████╗╚████╔╝ ███████╗██║  ██║\n            ╚══▀▀═╝  ╚═════╝ ╚═╝ ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝╚══════╝ ╚═══╝  ╚══════╝╚═╝  ╚═╝',
    scss : '╔═══════════════════════════╗\n           ║       Sass compiled       ║\n           ╚═══════════════════════════╝',
    js   : '╔════════════════════════╗\n           ║       JS bundled       ║\n           ╚════════════════════════╝',
    error: '╔═══════════════════════╗\n           ║ An error has occurred ║\n           ╚═══════════════════════╝',
};

/*
 sudo npm install alertify.js combokeys fancybox font-awesome imagesloaded jquery jquery-bridget jquery-match-height lodash masonry-layout moment nprogress parsleyjs slick-carousel --save
 sudo npm install fs gulp chalk watchify babelify gulp-sass gulp-util browserify gulp-pixrem gulp-plumber gulp-replace gulp-sourcemaps gulp.spritesmith gulp-autoprefixer gulp-real-favicon vinyl-source-stream gulp-sass-bulk-import --save
 */