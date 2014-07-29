# grunt-content-assist

> content assist

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-content-assist --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-content-assist');
```

## The "content_assist" task

### Overview
In your project's Gruntfile, add a section named `content_assist` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  content_assist: {
      options: {
          namespace:'iAuto'
      },
      files: {
          src: ['./test/*.js'],
          dest: 'builds'
      }
  },
});
```

### Options

#### options.namespace
Type: `String`

The namespace of js frameworks 

### Files

#### files.src
Type: `String`

A string value is the file which is the jsduck output.

#### files.dest
Type: `String`

A string value is the path your want to output the result.

### Usage Examples

```js
grunt.initConfig({
  content_assist: {
      options: {
          namespace:'iAuto'
      },
      files: {
          src: ['./test/*.js'],
          dest: 'builds'
      }
  },
});
```

## Release History
0.2.0  remove java commonds,rewrite transform codes removew shell.js plugin,use jquery 1.8.3
0.1.2  call shell to use java to transform jsduck docs to eclipse content assist files