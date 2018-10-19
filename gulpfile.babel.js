/*------------------------------------------------------------------
 Imports
 ------------------------------------------------------------------*/
const gulp         = require('gulp');
const chalk        = require('chalk');
const watchify     = require('watchify');
const exorcist     = require('exorcist');
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
const root  = `${__dirname}/themes/quicksilver/`;
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

gulp.task('styles', () => {
    return gulp.src(paths.styles.src)
        .pipe(plumber(function (error) {
            gutil.log(`${chalk['yellow'](error.file.toString().replace(paths.reg.root, ''))}`);
            gutil.log(`${chalk['red'](error['messageOriginal'])}`);
            this.emit('end');
        }))
        .pipe(bulkSass())
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(autoprefixer({ browsers: ['last 5 versions'] }))
        .pipe(pixrem({ rootValue: '10px' }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(paths.styles.dest));
});

/*------------------------------------------------------------------
 Flat CMS Theme
 ------------------------------------------------------------------*/

const cms = './flat-cms/';
gulp.task('cms', function () {
    Message('scss', 'green');
    return gulp.src([cms + 'styles/*.scss'])
        .pipe(plumber(function (error) {
            gutil.log(`${chalk['yellow'](error.file.toString().replace(paths.reg.root, ''))}`);
            gutil.log(`${chalk['red'](error['messageOriginal'])}`);
            this.emit('end');
        }))
        .pipe(bulkSass())
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(autoprefixer({ browsers: ['last 5 versions'] }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(cms + 'styles/css'))
});

gulp.task('flat', ['cms'], function () {
    compileScripts(true);
    gulp.watch([cms + 'styles/scss/*.scss'], ['cms']).on('change', function (evt) {
        Message('scss', 'green');
        gutil.log(chalk['green'](' => ') + chalk['blue'](evt.path.replace(/^.*\/(?=[^\/]*$)/, '')) + ' was ' + chalk['green'](evt.type));
    });
});

/*------------------------------------------------------------------
 Spritesheet Creation
 ------------------------------------------------------------------*/

gulp.task('sprites', () => {
    let spriteData = gulp.src(paths.sprites.standard).pipe(spritesmith({
        padding    : 4,
        imgName    : 'sprites.png',
        cssName    : '_01-Sprites.scss',
        cssTemplate: `${root}app/sprites/sprite_positions.styl.mustache`
    }));
    spriteData.img.pipe(gulp.dest(`${root}dist/images`));
    spriteData.css.pipe(replace('@1x', '')).pipe(gulp.dest(`${root}app/styles/Sprites`));
    let retinaSpriteData = gulp.src(paths.sprites.retina).pipe(spritesmith({
        padding    : 8,
        imgName    : 'sprites-retina.png',
        cssName    : '_02-Sprites-retina.scss',
        cssTemplate: `${root}app/sprites/retina-sprite_positions.styl.mustache`
    }));
    retinaSpriteData.img.pipe(gulp.dest(`${root}dist/images`));
    retinaSpriteData.css.pipe(replace('@2x', '')).pipe(gulp.dest(`${root}app/styles/Sprites`));
});

/*------------------------------------------------------------------
 Scripts
 ------------------------------------------------------------------*/

function compileScripts(watch) {
    let props     = watchify.args;
    props.entries = [`${root}/app/js/components/app.js`];
    props.debug   = true;
    let bundler   = watch ? watchify(browserify(props)) : browserify(props);
    bundler.transform(babelify, { presets: ['es2015'] });

    function rebundle() {
        let stream = bundler.bundle().pipe(exorcist(`${paths.scripts.dest}app.js.map`));
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

let project = {
    site_name   : 'Quicksilver',
    site_url    : 'http://localhost/quicksilver',
    theme_colour: '#f0ff0f'
};

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
                backgroundColor: project.theme_colour,
                onConflict     : 'override'
            },
            androidChrome  : {
                pictureAspect: 'noChange',
                themeColor   : project.theme_colour,
                manifest     : {
                    name       : project.site_name,
                    display    : 'browser',
                    orientation: 'notSet',
                    onConflict : 'override',
                    declared   : true
                }
            },
            safariPinnedTab: {
                pictureAspect: 'silhouette',
                themeColor   : project.theme_colour
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

gulp.task('default', ['styles'], function () {
    Message('start', 'cyan');
    compileScripts(true);
    gulp.watch([paths.styles.src], ['styles']).on('change', function (evt) {
        Message('scss', 'cyan');
        gutil.log(chalk['cyan'](' => ') + chalk['blue'](evt.path.replace(/^.*\/(?=[^\/]*$)/, '')) + ' was ' + chalk['blue'](evt.type));
    });
    gulp.watch([`${root}/app/js/**/*.js`, `${root}/app/js/**/*.jsx`]).on('change', function (evt) {
        Message('js', 'cyan');
        gutil.log(chalk['cyan'](' => ') + chalk['blue'](evt.path.replace(/^.*\/(?=[^\/]*$)/, '')) + ' was ' + chalk['blue'](evt.type));
    });
});

/*------------------------------------------------------------------
 Output Messages
 ------------------------------------------------------------------*/
function Message(message, col) {
    let color = (col !== undefined) ? col : 'yellow';
    gutil.log(chalk[color](Messages[message]));
}

const Messages = {
    start: ' ██████╗ ██╗   ██╗██╗ ██████╗██╗  ██╗███████╗██╗██╗    ██╗   ██╗███████╗██████╗\n           ██╔═══██╗██║   ██║██║██╔════╝██║ ██╔╝██╔════╝██║██║    ██║   ██║██╔════╝██╔══██╗\n           ██║   ██║██║   ██║██║██║     █████╔╝ ███████╗██║██║    ██║   ██║█████╗  ██████╔╝\n           ██║▄▄ ██║██║   ██║██║██║     ██╔═██╗ ╚════██║██║██║    ╚██╗ ██╔╝██╔══╝  ██╔══██╗\n           ╚██████╔╝╚██████╔╝██║╚██████╗██║  ██╗███████║██║███████╗╚████╔╝ ███████╗██║  ██║\n            ╚══▀▀═╝  ╚═════╝ ╚═╝ ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝╚══════╝ ╚═══╝  ╚══════╝╚═╝  ╚═╝',
    scss : '╔═══════════════════════════╗\n           ║       Sass compiled       ║\n           ╚═══════════════════════════╝',
    js   : '╔════════════════════════╗\n           ║       JS bundled       ║\n           ╚════════════════════════╝',
    error: '╔═══════════════════════╗\n           ║ An error has occurred ║\n           ╚═══════════════════════╝',
};
