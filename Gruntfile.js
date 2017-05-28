'use strict';

module.exports = function(grunt) {
  'use strict';

  const version  = require('./package.json').version;
  const buildDir = `${__dirname}/build/${version}/`;

  grunt.initConfig({
    watch:  require('./grunt/watch')(grunt),
    sass:   require('./grunt/sass')(grunt, buildDir),
    clean:  require('./grunt/clean')(grunt, buildDir),
    cssmin: require('./grunt/cssmin')(grunt, buildDir)
  });

  grunt.registerTask('default', ['clean', 'sass:dist', 'cssmin:dist']);
  grunt.registerTask('dev', ['clean', 'watch:sass']);
};

