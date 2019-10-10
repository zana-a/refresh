const fs = require("fs");
const gulp = require("gulp");
const sourcemaps = require("gulp-sourcemaps");
const gap = require("gulp-append-prepend");
const color = require("gulp-color");
const cleanCSS = require("gulp-clean-css");
const prettier = require("gulp-prettier");
const rename = require("gulp-rename");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");

const packageData = JSON.parse(fs.readFileSync("./package.json"));

const autoprefixerOptions = {
  browsers: [
    "last 2 version",
    "safari 5",
    "ie 8",
    "ie 9",
    "opera 12.1",
    "ios 6",
    "android 4"
  ]
};

const cleanCSSOptions = {
  2: {
    removeDuplicateRules: true, // turns on removing duplicate rules
    restructureRules: true // controls rule restructuring; defaults to false
  }
};

const metaData = {
  locations: {
    src: "./sass/lemonade.sass",
    dist: "./dist"
  },
  // Prepends header to css output files.
  // Managed by package.json
  fileHeader: `\n\n/*!\n * ${packageData.name} (${packageData.version}) | ${packageData.license}\n * repo: ${packageData.repository.url}\n */\n\n`
};

gulp.task("sass:prod", async () => {
  return gulp
    .src(metaData.locations.src)
    .pipe(gap.prependText(metaData.fileHeader))
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer({ autoprefixerOptions }))
    .pipe(cleanCSS(cleanCSSOptions))
    .pipe(rename("lemonade.min.css")) // Renames to lemonade.min.css
    .pipe(sourcemaps.write("./")) // Automatically chooses the lemonade.min.css.map filename
    .pipe(gulp.dest(metaData.locations.dist));
});

gulp.task("sass:dev", async () => {
  return gulp
    .src(metaData.locations.src)
    .pipe(gap.prependText(metaData.fileHeader))
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer({ autoprefixerOptions }))
    .pipe(cleanCSS(cleanCSSOptions))
    .pipe(prettier())
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest(metaData.locations.dist));
});

gulp.task("watch", async () => {
  const watcher = gulp.watch(
    ["./sass/**/*.sass"],
    gulp.parallel(["sass:dev", "sass:prod"])
  );

  watcher.on("change", function(path, stats) {
    console.log(color("\n" + path + " was changed" + "\n", "GREEN"));
  });

  watcher.on("add", function(path, stats) {
    console.log(color("\n" + path + " was changed" + "\n", "BLUE"));
  });

  watcher.on("unlink", function(path, stats) {
    console.log(color("\n" + path + " was changed" + "\n", "RED"));
  });
});

gulp.task("build", gulp.parallel(["sass:dev", "sass:prod"]));
gulp.task("default", gulp.series("watch"));
