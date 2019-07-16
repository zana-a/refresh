const fs = require("fs");
const gulp = require("gulp");
const less = require("gulp-less");
const lessAutoprefixer = require("less-plugin-autoprefix");
const lessLists = require("less-plugin-lists");
const sourcemaps = require("gulp-sourcemaps");
const gap = require("gulp-append-prepend");
const color = require("gulp-color");
const csso = require("gulp-csso");
const prettier = require("gulp-prettier");
const rename = require("gulp-rename");

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

const cssoOptions = {
  restructure: true,
  sourceMap: true,
  debug: false,
  forceMediaMerge: true
};

const metaData = {
  locations: {
    src: "./src/lemonade.less",
    dist: "./dist"
  },
  // Prepends header to css output files.
  // Managed by package.json
  fileHeader: `/*!\n * ${pacakgeData.name} (${pacakgeData.version}) | ${pacakgeData.license}\n * repo: ${pacakgeData.repository.url}\n */`
};

gulp.task("less:prod", async () => {
  return gulp
    .src(metaData.locations.src)
    .pipe(gap.prependText(metaData.fileHeader))
    .pipe(sourcemaps.init())
    .pipe(less({ plugins: [autoprefixer, lessLists] }))
    .pipe(csso(cssoOptions))
    .pipe(rename("lemonade.min.css")) // Renames to lemonade.min.css
    .pipe(sourcemaps.write("./")) // Automatically chooses the lemonade.min.css.map filename
    .pipe(gulp.dest(metaData.locations.dist));
});

gulp.task("less:dev", async () => {
  return gulp
    .src(metaData.locations.src)
    .pipe(gap.prependText(metaData.fileHeader))
    .pipe(sourcemaps.init())
    .pipe(less({ plugins: [autoprefixer, lessLists] }))
    .pipe(csso(cssoOptions))
    .pipe(prettier())
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest(metaData.locations.dist));
});

gulp.task("watch", async () => {
  const watcher = gulp.watch(
    ["./src/**/*.less"],
    gulp.parallel(["less:dev", "less:prod"])
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

gulp.task("build", gulp.parallel(["less:dev", "less:prod"]));
gulp.task("default", gulp.series("watch"));
