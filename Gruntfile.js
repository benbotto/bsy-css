'use strict';

module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    watch:  require('./grunt/watch')(grunt),
    sass:   require('./grunt/sass')(grunt),
    clean:  require('./grunt/clean')(grunt),
    cssmin: require('./grunt/cssmin')(grunt)
  });

  grunt.registerTask('default', ['clean', 'sass:dist', 'cssmin:dist']);
  grunt.registerTask('dev', ['clean', 'watch:sass']);
};

