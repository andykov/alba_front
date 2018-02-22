'use strict';

const gulp = require('gulp');

const browserSync = require('browser-sync').create();

const path = require('path');
const del = require('del');

const postcss = require('gulp-postcss');
// const lessImport = require('gulp-less-import');
const less = require('gulp-less');
const sass = require('gulp-sass');
const autoprefixer = require("gulp-autoprefixer");

const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

const pug = require('gulp-pug');

const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const inlineSVG = require('postcss-inline-svg');
const svgstore = require('gulp-svgstore');
const svgmin = require('gulp-svgmin');

const rename = require('gulp-rename');
const notify = require('gulp-notify');
const debug = require('gulp-debug');
// const clean = require('gulp-clean');


var PATH = {
	SRC: {
    PUG: 'src/pug/*.pug',
		SASS: 'src/sass/template.scss',
    JS: [
      'src/blocks/**/*.js',
      'src/scripts/main.js'
    ],
    IMG: [
      '!src/images/icons/',
      'src/images/**/*.{jpg,jpeg,gif,png,svg}'
    ],
    SVG: [
      'src/images/svg/**/*.svg'
    ],
    FONTS: 'src/fonts/**'
	},
	BUILD: {
    HTML: 'build/',
		CSS: 'build/css/',
    JS: 'build/js/',
    IMG: 'build/img/',
    SVG: 'build/img/svg',
    FONTS: 'build/fonts/'
	},
  LIBS: {
    CSS: [
        'node_modules/slick-carousel/slick/slick.css',
        'node_modules/magnify/dist/css/magnify.css',
        'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min.css',
        'node_modules/brazzers-carousel/Brazzers-Carousel/jQuery.Brazzers-Carousel.min.css',
        'node_modules/air-datepicker/dist/css/datepicker.min.css',
      // 'src/sass/libs/slick.css',
    ],
    JS: [
      'node_modules/ismobilejs/isMobile.min.js',
      'node_modules/jquery/dist/jquery.min.js',
      'node_modules/slick-carousel/slick/slick.min.js',
      'node_modules/magnify/dist/js/jquery.magnify.js',
      // 'node_modules/magnify/dist/js/jquery.magnify-mobile.js',
      'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min.js',
      'node_modules/brazzers-carousel/Brazzers-Carousel/jQuery.Brazzers-Carousel.min.js',
      // 'node_modules/sticky-kit/distfsev/sticky-kit.min.js',
      'node_modules/sticky-sidebar/dist/jquery.sticky-sidebar.min.js',
      'node_modules/air-datepicker/dist/js/datepicker.min.js',
      // 'src/scripts/libs/slick.min.js',
      // 'src/scripts/libs/jquery.sticky-sidebar.js',
    ]
  },
  WATCH: {
    PUG: ['src/pug/**/*.pug', 'src/blocks/**/*.pug'],
    SASS: ['src/sass/libs/*.scss', 'src/sass/settings/*.scss', 'src/sass/*.scss', 'src/blocks/**/*.scss'],
    JS: ['src/scripts/main.js', 'src/blocks/**/*.js'],
    SVG: ['src/images/svg/**/*.svg']
  }
};

/*--------------------------------------------------------------
# CSS
--------------------------------------------------------------*/
// gulp.task('less:blocks', function () {
//   console.log('---------- Обработка Less');
//     return gulp.src('../blocks/**', {base: '**/*.less'})
//         .pipe(lessImport('_blocks-imports.less'))
//         .pipe(gulp.dest('src/less/'))
//         .pipe(browserSync.stream());
// });
gulp.task('css:libs', function () {
  console.log('---------- Копирование внешних стилей');
    return gulp.src(PATH.LIBS.CSS)
        .pipe(concat('libs.css'))
        .pipe(gulp.dest(PATH.BUILD.CSS))
        .pipe(browserSync.stream());
});
gulp.task('sass', function () {
  console.log('---------- Обработка Less');
    return gulp.src(PATH.SRC.SASS)
        // .pipe(sourcemaps.init())
        // .pipe(cached('less'))
        // .pipe(dependents())
        .pipe(sass()).on('error', notify.onError(function(err){
            return {
                title: 'SASS',
                message: err.message
            };
        }))
        .pipe(postcss([
          require('postcss-flexbugs-fixes'),
          require('postcss-inline-svg')
        ]))
        .pipe(autoprefixer({browsers: ['last 10 versions']}))
        .pipe(debug({title: 'обработано less файлов'}))
        // .pipe(sourcemaps.write())
        .pipe(gulp.dest(PATH.BUILD.CSS))
        .pipe(browserSync.stream());
});


/*--------------------------------------------------------------
# HTML
--------------------------------------------------------------*/
gulp.task('pug', function () {
  console.log('---------- Обработка Pug');
    return gulp.src(PATH.SRC.PUG)
        .pipe(pug({pretty: true}))
        .on('error', notify.onError(function(err){
            return {
                title: 'PUG',
                message: err.message
            };
        }))
        .pipe(gulp.dest(PATH.BUILD.HTML))
        .pipe(browserSync.stream());
});


/*--------------------------------------------------------------
# JS
--------------------------------------------------------------*/

gulp.task('js:libs', function () {
    console.log('---------- Обработка внешних JS файлов');
    return gulp.src(PATH.LIBS.JS)
      // .pipe(plumber({
      //   errorHandler: function(err) {
      //     notify.onError({
      //       title: 'Javascript concat/uglify error',
      //       message: err.message
      //     })(err);
      //     this.emit('end');
      //   }
      // }))
      .pipe(concat('libs.js'))
      .pipe(uglify())
      .pipe(gulp.dest(PATH.BUILD.JS))
      .pipe(browserSync.stream());
});
gulp.task('js', function () {
    console.log('---------- Обработка JS проекта');
    return gulp.src(PATH.SRC.JS)
      // .pipe(plumber({
      //   errorHandler: function(err) {
      //     notify.onError({
      //       title: 'Javascript concat/uglify error',
      //       message: err.message
      //     })(err);
      //     this.emit('end');
      //   }
      // }))
      .pipe(concat('main.js'))
      // .pipe(uglify())
      .pipe(gulp.dest(PATH.BUILD.JS))
      .pipe(browserSync.stream());
});


/*--------------------------------------------------------------
# JS
--------------------------------------------------------------*/
gulp.task('fonts', function () {
    console.log('---------- Копирование шрифтов');
    return gulp.src(PATH.SRC.FONTS)
      .pipe(gulp.dest(PATH.BUILD.FONTS));
});


/*--------------------------------------------------------------
# Оптимизация и копирование изображений
--------------------------------------------------------------*/
gulp.task('img', function () {
    console.log('---------- Оптимизация картинок');
    return gulp.src(PATH.SRC.IMG)
      .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [pngquant()]
      })).on('error', notify.onError(function(err){
            return {
                title: 'IMG',
                message: err.message
            };
      }))
      .pipe(gulp.dest(PATH.BUILD.IMG));
});

gulp.task('sprite:svg', function () {

      console.log('---------- Сборка SVG спрайта');
      return gulp.src(PATH.SRC.SVG)
        // .pipe(svgmin(function (file) {
        //   return {
        //     plugins: [{
        //       cleanupIDs: {
        //         minify: true
        //       }
        //     }]
        //   }
        // }))
        .pipe(svgstore())
        // .pipe(svgstore({ inlineSvg: true }))
        .pipe(rename('sprite-svg.svg'))
        // .pipe(size({
        //   title: 'Размер',
        //   showFiles: true,
        //   showTotal: false,
        // }))
        .pipe(gulp.dest(PATH.BUILD.SVG));
});

/*--------------------------------------------------------------
# Remove folder build before starting build
--------------------------------------------------------------*/
gulp.task('clean', function() {
  console.log('---------- Очистка папки build');
  return del('build/');
});


/*--------------------------------------------------------------
# All task
--------------------------------------------------------------*/
gulp.task('build', gulp.series('clean',
  gulp.parallel('pug', 'css:libs', 'sass', 'js:libs', 'js', 'img', 'sprite:svg', 'fonts'))
);


/*--------------------------------------------------------------
# Tracking changes files
--------------------------------------------------------------*/
gulp.task('serve', function () {
  browserSync.init({
    server: "build/"
  });

  gulp.watch(PATH.WATCH.PUG, gulp.series('pug'));
  gulp.watch(PATH.WATCH.SASS, gulp.series('sass'));
  gulp.watch(PATH.WATCH.JS, gulp.series('js'));
  gulp.watch(PATH.WATCH.SVG, gulp.series('sprite:svg'));
  // gulp.watch('src/img/svg/icons/**/*', ['svgstore']);
  // gulp.watch(['src/img/**/*', '!src/img/svg/icons/**/*'], ['webp']);
  // gulp.watch('src/js/**/*', ['browserify']);
});

// gulp.task('default', gulp.parallel('serve'));

/*--------------------------------------------------------------
# Start building and watching files
--------------------------------------------------------------*/
gulp.task('default',
  gulp.series('build', gulp.parallel('serve'))
);


