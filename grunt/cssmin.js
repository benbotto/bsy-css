module.exports = function(grunt, scripts) {
  'use strict';

  const cssmin = {
    dist: {
      files: {
        'build/bsy.css' : 'build/bsy.css'
      }
    }
  };

  grunt.loadNpmTasks('grunt-contrib-cssmin');

  return cssmin;
};

