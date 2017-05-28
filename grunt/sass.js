module.exports = function(grunt, buildDir) {
  'use strict';

  const sass = {
    dist: {
      files: {
        [`${buildDir}bsy.css`] : 'src/scss/bsy.scss'
      },
      options: {
        sourceMap: false,
      }
    },
    dev: {
      files: {
        [`${buildDir}bsy.css`] : 'src/scss/bsy.scss'
      },
      options: {
        sourceMap: true,
      }
    }
  };

  grunt.loadNpmTasks('grunt-sass');

  return sass;
};
