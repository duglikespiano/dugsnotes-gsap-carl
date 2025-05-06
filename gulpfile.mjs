// gulpプラグイン本体を読み込み
import gulp from 'gulp';
const { src, dest, watch, lastRun, parallel, series } = gulp;

/* ========================================================================
 * Sassをコンパイルするプラグインを読み込み
 ======================================================================== */
import sass from 'gulp-dart-sass';
import sassGlob from 'gulp-sass-glob';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import postcss from 'gulp-postcss';
import mqpacker from 'css-mqpacker';

/* ========================================================================
 * テンプレートエンジン(EJS)をコンパイルするプラグインを読み込み
 ======================================================================== */
import rename from 'gulp-rename';
import ejs from 'gulp-ejs';
import prettier from 'gulp-prettier';

/* ========================================================================
 * ローカルサーバー系のプラグイン
 ======================================================================== */
import gulpConnect from 'gulp-connect-php';
import browserSyncPkg from 'browser-sync';
const browserSync = browserSyncPkg.create(); // create() required for ESM
import connectSSI from 'connect-ssi';

/* ========================================================================
 * Sassをコンパイルするタスク
 ======================================================================== */
const watchScssDirectories = ['**/*.scss', '!./boilerplates/**/*.scss'];
const compileSass = () =>
	src(watchScssDirectories)
		.pipe(
			plumber({
				errorHandler: notify.onError('Error: <%= error.message %>'),
			})
		)
		.pipe(sassGlob())
		.pipe(
			sass({
				outputStyle: 'expanded',
			})
		)
		.pipe(postcss([mqpacker()]))
		.pipe(
			gulp.dest(function (file) {
				return file.base;
			})
		)
		.pipe(browserSync.stream());

/*
 * Sassファイルを監視し、変更があったらSassを変換。
 */
const watchSassFiles = () => watch(watchScssDirectories, compileSass);

/* ========================================================================
 * EJSをコンパイルするタスク
 ======================================================================== */
const watchEjsDirectories = ['**/!(_)*.ejs', '!./node_modules/**/*.ejs', '!./boilerplates/**/*.ejs'];
const compileEjs = () =>
	src(watchEjsDirectories)
		.pipe(
			plumber({
				errorHandler: notify.onError('Error: <%= error.message %>'),
			})
		)
		.pipe(ejs({}, {}, { ext: '.html' }))
		.pipe(rename({ extname: '.html' }))
		.pipe(
			prettier({
				tabWidth: 2,
				useTabs: false,
				parser: 'html',
				htmlWhitespaceSensitivity: 'ignore',
			})
		)
		.pipe(
			gulp.dest(function (file) {
				return file.base;
			})
		)
		.pipe(browserSync.stream());
const watchEjsFiles = () => watch(watchEjsDirectories, compileEjs);

/* ========================================================================
 * ローカルサーバーを立ち上げるタスク
 ======================================================================== */
const developServerPHP = () =>
	gulpConnect.server(
		{
			base: '.',
			livereload: true,
			port: 3002,
		},
		function () {
			browserSync.init({
				proxy: 'localhost:3002',
				middleware: [
					connectSSI({
						baseDir: '.',
						ext: '.html',
					}),
				],
			});
		}
	);

watch(['**/*.ejs', '**/*.css', '**/*.js']).on('change', browserSync.reload);

/* ========================================================================
 * 処理パターン
 ======================================================================== */
export default series(compileEjs, compileSass, parallel(watchSassFiles, watchEjsFiles, developServerPHP));
