/**
 *     ██████╗ ██╗   ██╗██╗     ██████╗     ███████╗██╗██╗     ███████╗
 *    ██╔════╝ ██║   ██║██║     ██╔══██╗    ██╔════╝██║██║     ██╔════╝
 *    ██║  ███╗██║   ██║██║     ██████╔╝    █████╗  ██║██║     █████╗
 *    ██║   ██║██║   ██║██║     ██╔═══╝     ██╔══╝  ██║██║     ██╔══╝
 *    ╚██████╔╝╚██████╔╝███████╗██║         ██║     ██║███████╗███████╗
 *     ╚═════╝  ╚═════╝ ╚══════╝╚═╝         ╚═╝     ╚═╝╚══════╝╚══════╝
 *
 *    Author: Jaydn de Graaf
 *    Email: jd@pinc.nz
 *
 *    Main Tasks:
 *    ------------------
 *    => default
 *    => sprites
 *    => sass
 *    => js
 *    => svg
 *    => document
 */

'use strict';

var prod = false;
var root = './mysite/';

var app           = root + 'app/',
	dist          = root + 'dist/',
	modules       = '../modules/',

	/* Sprites */
	sprites       = [app + '*/@1x/*.png'],
	retinasprites = [app + '*/@2x/*.png'];

/* Stylesheets */
var styles = [app + '*//*.png'];

/* Requires */
var gulp = require("gulp");
var size = require('gulp-size');
var gulpif = require("gulp-if");

//-----------------------------------------------------------
// Clean
//-----------------------------------------------------------

var del = require('del');

gulp.task('clean', function (cb) {
	del([
		dist + 'styles/*',
		dist + 'svg/*',
		dist + 'js/*'
	], cb);
});


// -----------------------------------------------------------
// Sass
//-----------------------------------------------------------
var sass         = require('gulp-sass'),
	order        = require("gulp-order"),
	concat       = require("gulp-concat"),
	cssmin       = require("gulp-cssmin"),
	plumber      = require("gulp-plumber"),
	sourcemaps   = require("gulp-sourcemaps"),
	autoprefixer = require("gulp-autoprefixer");

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
		.pipe(size({showFiles: true}))
		.pipe(gulp.dest(dist + 'styles'));
});

//-----------------------------------------------------------
// Sprites
//-----------------------------------------------------------
var imagemin    = require('gulp-imagemin'),
	spritesmith = require('gulp.spritesmith'),
	pngquant    = require('imagemin-pngquant');

gulp.task('sprites', function () {

	//-------------------------------------------------------
	//	Standard Sprites
	//-------------------------------------------------------
	var spriteData = gulp.src(sprites).pipe(spritesmith({
		padding    : 4,
		imgName    : 'sprites.png',
		cssName    : '01-sprites.scss',
		cssTemplate: app + 'images/@1x/sprite_positions.styl.mustache',
	}));

	spriteData.img
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use        : [pngquant()]
		}))
		.pipe(size({showFiles: true}))
		.pipe(gulp.dest(dist + 'images'));

	spriteData.css.pipe(gulp.dest(app + 'styles/01-Sprites'));

	//-------------------------------------------------------
	// Retina Sprites
	//-------------------------------------------------------
	var retinaSpriteData = gulp.src(retinasprites).pipe(spritesmith({
		padding    : 8,
		imgName    : 'sprites-retina.png',
		cssName    : '02-sprites-retina.scss',
		cssTemplate: app + 'images/@2x/retina-sprite_positions.styl.mustache'
	}));

	retinaSpriteData.img
		.pipe(imagemin({
			progressive: true,
			use        : [pngquant()],
			svgoPlugins: [{removeViewBox: false}]
		}))
		.pipe(size({showFiles: true}))
		.pipe(gulp.dest(dist + 'images'));

	retinaSpriteData.css.pipe(gulp.dest(app + 'styles/01-Sprites'));

});

//-----------------------------------------------------------
// JS
//-----------------------------------------------------------
var babel = require("gulp-babel");
var rename = require("gulp-rename");

gulp.task("js", function () {
	return gulp.src([app + 'js/internal/*.js'])
		.pipe(sourcemaps.init())
		.pipe(concat("app.js"))
		.pipe(babel({"compact": false}))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest(dist + 'js'));
});

var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var uglify = require("gulp-uglify");

gulp.task('modules', function () {
	browserify({
		entries: app + 'js/components/app.js',
		debug  : true
	})
		.transform(babelify)
		.bundle()
		.pipe(source('output.js'))
		.pipe(gulp.dest(dist + 'js'));
});


gulp.task('minify-js', ['modules'], function () {
	return gulp.src([dist + 'js/output.js'])
		.pipe(uglify())
		.pipe(rename({
			extname: '.min.js'
		}))
		.pipe(size({showFiles: true}))
		.pipe(gulp.dest(dist + 'js/'))
});

var minifyCss = require('gulp-minify-css');

gulp.task('minify-css', ['sass'], function () {
	return gulp.src([dist + 'styles/style.css'])
		.pipe(minifyCss())
		.pipe(size({showFiles: true}))
		.pipe(rename({
			extname: '.min.css'
		}))
		.pipe(gulp.dest(dist + 'styles/'))
})

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
			},
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
		'screen and (min-width: 1024px)',
	];

	gulp.src([dist + 'styles/style.css'])
		.pipe(rework(queryless(keepmatches)))
		.pipe(rename({
			suffix: '.ie'
		}))
		.pipe(gulp.dest(dist + 'styles/'))

});

// -----------------------------------------------------------
// Task Declaration
//------------------------------------------------------------

var util = require("gulp-util");
var chalk = require("chalk");

var changeEvent = function (evt) {
	util.log('File', chalk.green(evt.path.replace(/^.*\/(?=[^\/]*$)/, '')), 'was', chalk.green(evt.type));
};
gulp.task('default', ['clean', 'sprites', 'sass', 'js', 'modules', 'modules', 'minify-js', 'minify-css', 'svg', 'ie'], function () {


	gulp.watch([app + 'styles/**/*.scss', modules + '**/*.scss'], ['sass', 'minify-css', 'ie']).on('change', function (evt) {
		changeEvent(evt);
	});

	gulp.watch([app + 'js/internal/*.js'], ['js', ['minify-js']]).on('change', function (evt) {
		changeEvent(evt);
	});

	gulp.watch([app + 'js/components/*.js'], ['modules', ['minify-js']]).on('change', function (evt) {
		changeEvent(evt);
	});

	gulp.watch([app + 'images/svg/*.svg'], ['svg']).on('change', function (evt) {
		changeEvent(evt);
	});

	//-----------------------------------------------------------
	// Watch for creation or deletion of sass files
	//-----------------------------------------------------------

	var watch = require('gulp-watch');

	watch(app + 'styles/**/*', function (event) {
		if (event.event == 'add' || event.event == 'unlink') {

			var eventType = (event.event == 'add') ? 'added' : 'removed';

			console.log('SASS file has been ' + eventType + ', runninng a new build task :)');

			gulp.src([app + 'styles/**/*.scss'])
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
				.pipe(size({showFiles: true}))
				.pipe(gulp.dest(dist + 'styles'));
		}
	});

});

gulp.task('deploy', ['clean', 'sprites', 'sass', 'js', 'modules', 'minify-js', 'minify-css', 'svg']);

gulp.task('minify', ['minify-js', 'minify-css']);

