/* jshint node: true */
module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    angularToolbox: {}
  });

  grunt.loadNpmTasks('grunt-angular-toolbox');

  grunt.registerTask('default', ['test']);
};
