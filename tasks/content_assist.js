/*
 * grunt-content-assist
 * https://github.com/guyingll/grunt-content-assist
 *
 * Copyright (c) 2014 yanpeng
 * Licensed under the MIT license.
 */

'use strict';
var shell = require('shelljs');
module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('content_assist', 'content assist', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      inputdir:'',
      outputdir: '',
      pathexpand:"node_modules/grunt-content-assist/"
    });
    var tools=options.pathexpand+"JsAuto.jar";
    var cmd="java -jar "+tools+" iAuto "+options.inputdir+" "+options.outputdir;
    var success = shell.exec(cmd, {silent:true}).code === 0?"success":"faild";
    grunt.log.writeln('File "' + options.outputdir + '" created '+success);
    // Iterate over all specified file groups.
//    this.files.forEach(function(f) {
//      // Concat specified files.
//      var src = f.src.filter(function(filepath) {
//        // Warn on and remove invalid source files (if nonull was set).
//        if (!grunt.file.exists(filepath)) {
//          grunt.log.warn('Source file "' + filepath + '" not found.');
//          return false;
//        } else {
//          return true;
//        }
//      }).map(function(filepath) {
//        // Read file source.
//        var cmd="java -jar JsAuto.jar iAuto inputDir outputDir";
//        var success = shell.exec(cmd, {silent:true}).code === 0;
//        return success;
//        // return grunt.file.read(filepath);
//      }).join(grunt.util.normalizelf(options.separator));
//
//      // Handle options.
//      src += options.punctuation;
//
//      // Write the destination file.
//      grunt.file.write(f.dest, src);
//
//      // Print a success message.
//      grunt.log.writeln('File "' + f.dest + '" created.');
//    });
  });

};
