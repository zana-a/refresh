module.exports = function(grunt) {
  grunt.initConfig({
    watch: {
      files: "./src/**/*.less",
      tasks: ["less"]
    },
    less: {
      development: {
        options: {
          paths: ["./src"]
        },
        files: {
          "./dist/lemonade.css": "./src/lemonade.less"
        }
      },
      production: {
        options: {
          paths: ["./dist"],
          plugins: [
            new (require("less-plugin-autoprefix"))({
              browsers: ["last 2 versions"]
            }),
            new (require("less-plugin-clean-css"))({
              options: {
                advanced: true
              }
            })
          ],
          syncImport: true,
          banner: "/*! Lemonade 0.0.1 **/",
          stripBanners: true,
          sourceMap: false,
          sourceMapFilename: "./dist/lemonade.min.map"
        },
        files: {
          "./dist/lemonade.min.css": "./src/lemonade.less"
        }
      }
    }
  });

  grunt.registerTask("default", ["watch"]);
  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-contrib-watch");
};
