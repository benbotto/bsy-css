module.exports = function(grunt) {
  'use strict';

  const clean = {
    build: ['build']
  };

  grunt.loadNpmTasks('grunt-contrib-clean');

  return clean;
};

