let gulp = require("gulp");
let less = require("gulp-less");
let LessAutoprefixer = require("less-plugin-autoprefix");
let sourcemaps = require('gulp-sourcemaps');
let cleanCSS = require('gulp-clean-css');

const autoprefixer = new LessAutoprefixer({
  browsers: ['last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4']
});

const cleanCSSOptionsDev = {
  level: 2,
  format: "beautify"
}

const cleanCSSOptionsProd = {
  level: 2
}

const metaData = {
  "src": "./src/lemonade.less",
  "dist": "./dist"
}

gulp.task("default", async () => {
  return gulp.src(metaData.src)
    .pipe(sourcemaps.init())
    .pipe(less({ plugins: [autoprefixer] }))
    .pipe(sourcemaps.write("./"))
    .pipe(cleanCSS(cleanCSSOptionsDev, (details) => {
      console.log(`\nOriginal Size: ${details.name}: ${details.stats.originalSize}`);
      console.log(`Minified Size: ${details.name}: ${details.stats.minifiedSize}\n`);
    }))
    .pipe(gulp.dest(metaData.dist));
});