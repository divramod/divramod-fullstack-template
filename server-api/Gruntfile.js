module.exports = function(grunt) {
    grunt.initConfig({
        mochaTest: {
            test: {
                options: {
                    reporter: 'spec'
                },
                src: ['tests/**/*.js']
            }
        },
        watch: {
            express: {
                files: ['**/*.js'],
                tasks: ['express:dev'],
                options: {
                    spawn: false // Without this option specified express won't be reloaded
                }
            }
        },
        express: {
            options: {
                // Override defaults here
                port: 3018,
            },
            dev: {
                options: {
                    script: 'server-api-fortiden.js'
                }
            },
            prod: {
                options: {
                    script: 'path/to/prod/server.js',
                    node_env: 'production'
                }
            },
            test: {
                options: {
                    script: 'path/to/test/server.js'
                }
            }
        },
        open: {
            loc: {
                path: 'ft/api',
                app: 'google-chrome'
            },
            locserver: {
                path: 'keg/api/',
                //path: 'http://localhost:3008/api/test/create',
                app: 'google-chrome'
            },
        }
    });
    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.registerTask('api-server', ['open:locserver', 'express:dev', 'watch'])
    grunt.registerTask('api-server-he', ['express:dev', 'watch'])
    grunt.registerTask('serverTests', 'mochaTest');
    grunt.registerTask('test', 'serverTests');
}
