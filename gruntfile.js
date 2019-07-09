module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
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
          paths: ["./dist/"],
          compress: true
        },
        files: {
          "./dist/lemonade.min.css": "./src/lemonade.less"
        }
      }
    }
  });

  grunt.loadNpmTasks("assemble-less");

  grunt.registerTask("default", ["less"]);
};
