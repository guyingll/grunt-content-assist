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
    default_options: {
        options: {
            inputdir:'test',
            outputdir:'gogo'
        }
    }
  },
});
```

### Options

#### options.inputdir
Type: `String`

A string value is the path of the jsduck output.

#### options.outputdir
Type: `String`

A string value is the path you want to ouput.

### Usage Examples

#### Custom Options
In this example, custom options are used to do something else with whatever else. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result in this case would be `Testing: 1 2 3 !!!`

```js
grunt.initConfig({
  content_assist: {
	default_options: {
        options: {
            inputdir:'docsOutput',
            outputdir:'assist'
        }
    }
  },
});
```

## Release History
_(Nothing yet)_
