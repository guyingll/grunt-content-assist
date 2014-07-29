/*
 * grunt-content-assist
 * https://github.com/guyingll/grunt-content-assist
 *
 * Copyright (c) 2014 yanpeng
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['builds']
    },

    // Configuration to be run (and then tested).
    content_assist: {
        options: {
            namespace:'iAuto'
        },
        files: {
            src: ['./test/*.js'],
            dest: 'tmp'
        }
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // // By default, lint and run all tests.
  grunt.registerTask('default', ['content_assist']);

  // // By default, lint and run all tests.
  grunt.registerTask('check', ['jshint']);

};
