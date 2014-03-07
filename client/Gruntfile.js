module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        config: {
            version: {},
            port: '3007'
        },
        watch: {
            default: {
                files: [
                        'src/js/**/*', 'src/css/**/*', 'src/img/**/*', 'src/views/**/*', 'vendor/**/*', 'Gruntfile.js'
                ],
                tasks: [],
                options: {
                    livereload: {
                        port: 9001,
                    }
                }
            },
            dev: {
                files: [
                        'src/coffee/**/*', 'src/style/**/*'
                ],
                tasks: [
                        'coffee:compile', 'stylus:compile'
                ]
            }
        },
        open: {
            locserver: {
                //path: 'http://localhost:<%= config.port %>',
                path: 'ft/',
                app: 'google-chrome'
            },
        },
        karma: {
            unit: {
                configFile: 'tests/config/unit.js'
            }
        },
        // https://github.com/gruntjs/grunt-contrib-coffee 
        coffee: {
            compile: {
                options: {
                    bare: true
                },
                expand: true,
                flatten: true,
                src: ['src/coffee/*.coffee'],
                dest: 'src/js/',
                ext: '.js'
            }
        },
        // https://github.com/gruntjs/grunt-contrib-jshint
        jshint: {
            all: ['Gruntfile.js', 'src/js/**/*.js']
        },
        // https://github.com/gruntjs/grunt-contrib-stylus
        // https://github.com/learnboost/stylus
        // http://learnboost.github.io/stylus/
        stylus: {
            compile: {
                options: {
                    /*
                    paths: ['path/to/import', 'another/to/import'],
                    urlfunc: 'embedurl', // use embedurl('test.png') in our code to trigger Data URI embedding
                    use: [
                        require('fluidity') // use stylus plugin at compile time
                    ],
                    import: [ //  @import 'foo', 'bar/moo', etc. into every .styl file
                        'foo', //  that is compiled. These might be findable based on values you gave
                        'bar/moo' //  to `paths`, or a plugin you added under `use`
                    ]
                    */
                },
                files: {
                    'src/css/style.css': 'src/style/style.styl', // 1:1 compile
                    //'path/to/another.css': ['path/to/sources/*.styl', 'path/to/more/*.styl'] // compile and concat into single file
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', ['open:locserver', 'watch']);

    grunt.registerTask('test', 'test some stuff', function() {
        console.log(__dirname);
    });

};
