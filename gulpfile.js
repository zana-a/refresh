let fs = require("fs");
let gulp = require("gulp");
let less = require("gulp-less");
let lessAutoprefixer = require("less-plugin-autoprefix");
let lessLists = require("less-plugin-lists");
let sourcemaps = require("gulp-sourcemaps");
let cleanCSS = require("gulp-clean-css");
let gap = require("gulp-append-prepend");

const pacakgeData = JSON.parse(fs.readFileSync("./package.json"));

const autoprefixer = new lessAutoprefixer({
  browsers: [
    "last 2 version",
    "safari 5",
    "ie 8",
    "ie 9",
    "opera 12.1",
    "ios 6",
    "android 4"
  ]
});

const cleanCSSOptionsDev = {
  level: 2,
  format: "beautify"
};

const cleanCSSOptionsProd = {
  level: 2
};

const metaData = {
  locations: {
    src: "./src/lemonade.less",
    dist: "./dist"
  },
  fileHeader: `/*!\n * ${pacakgeData.name} (${pacakgeData.version}) ~ ${pacakgeData.license}\n * ${pacakgeData.repository.url}\n */`
};

gulp.task("less:prod", async () => {
  return gulp
    .src(metaData.locations.src)
    .pipe(gap.prependText(metaData.fileHeader))
    .pipe(less({ plugins: [autoprefixer, lessLists] }))
    .pipe(sourcemaps.init())
    .pipe(
      cleanCSS(cleanCSSOptionsProd, details => {
        console.log(
          `\nOriginal Size: ${details.name}: ${details.stats.originalSize}`
        );
        console.log(
          `Minified Size: ${details.name}: ${details.stats.minifiedSize}\n`
        );
      })
    )
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest(metaData.locations.dist));
});

gulp.task("default", gulp.parallel("less:prod"));
