# grunt-couch-test

This is a test of [grunt-couch](https://github.com/jo/grunt-couch) to figure out the correct syntax for ignoring files.

The goal is to exclude all coffee files and the bar.js files. So far it is not working.

## Run

    grunt -v --stack couch

## Exclusion

Using the [Files Array Format](http://gruntjs.com/configuring-tasks#files-array-format) to identify the files to include/exclude.

          'couch-compile': {
            app: {
              files: [
                {src: ['couch/*', '!*.coffee', '!bar.js','!couch/bar.js', '!couch/full/bar.js'], dest: 'tmp/app.json'}
              ]
            }
          },
