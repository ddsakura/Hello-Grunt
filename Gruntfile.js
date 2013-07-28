module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
        files: ['*.js']
    },
    uglify: {
        build: {
            files: {
                'build/hello.min.js': ['src/hello.js']
            }
        }
    }
  });

    // Load the plugin that provides the "jshint" task.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['jshint', 'uglify']);

};