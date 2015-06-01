/* jshint node: true */
module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    angularToolbox: {},
    codeclimate: {
      report: {
        options: {
          file: '<%= angularToolbox.folder.coverageReport %>/lcov.info',
          token: process.env.CODECLIMATE_REPO_TOKEN
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-angular-toolbox');
  grunt.loadNpmTasks('grunt-codeclimate-reporter');

  grunt.registerTask('default', ['test']);
};
