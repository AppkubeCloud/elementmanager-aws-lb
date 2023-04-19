const sass = require('node-sass');

module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    sass: {
      options: {
        implementation: sass,
        sourceMap: true,
      },
      dist: {
        files: {
          'src/css/elementmanager.dark.css': 'src/sass/elementmanager.dark.scss',
          'src/css/elementmanager.light.css': 'src/sass/elementmanager.light.scss',
        },
      },
    },
  });

  grunt.registerTask('default', ['sass']);
};
