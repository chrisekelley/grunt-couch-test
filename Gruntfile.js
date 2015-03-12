module.exports = function(grunt) {

  grunt.initConfig({
      'couch-compile': {
        app: {
          files: [
            {src: ['couch/*', '!*.coffee', '!bar.js','!couch/bar.js', '!couch/full/bar.js'], dest: 'tmp/app.json'}
          ]
        }
      },
    'couch-push': {
      options: {
        user: 'admin',
        pass: 'password'
      },
      localhost: {
        files: {
          'http://localhost:5984/grunt-couch-test': 'tmp/app.json'
        }
      }
    }
  });

    // Requires the needed plugin
    grunt.loadNpmTasks('grunt-couch');
    grunt.registerTask('default',['couch']);

};
