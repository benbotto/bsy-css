module.exports = function(grunt, buildDir) {
  'use strict';

  const clean = {
    build: [buildDir]
  };

  grunt.loadNpmTasks('grunt-contrib-clean');

  return clean;
};

