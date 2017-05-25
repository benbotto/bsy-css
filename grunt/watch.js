module.exports = function(grunt) {
  'use strict';

  const watch = {
    sass: {
      options: {
        atBegin: true
      },
      files: 'src/scss/**/*.scss',
      tasks: ['sass:dev']
    }
  };

  grunt.loadNpmTasks('grunt-contrib-watch');

  return watch;
};

