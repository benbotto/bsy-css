module.exports = function(grunt, buildDir, appName) {
  'use strict';

  const sass = {
    dist: {
      files: {
        'build/bsy.css' : 'src/scss/bsy.scss'
      },
      options: {
        sourceMap: false,
      }
    },
    dev: {
      files: {
        'build/bsy.css' : 'src/scss/bsy.scss'
      },
      options: {
        sourceMap: true,
      }
    }
  };

  grunt.loadNpmTasks('grunt-sass');

  return sass;
};
