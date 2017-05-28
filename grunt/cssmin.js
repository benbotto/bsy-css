module.exports = function(grunt, buildDir) {
  'use strict';

  const cssmin = {
    dist: {
      files: {
        [`${buildDir}bsy.css`] : `${buildDir}bsy.css`
      }
    }
  };

  grunt.loadNpmTasks('grunt-contrib-cssmin');

  return cssmin;
};

