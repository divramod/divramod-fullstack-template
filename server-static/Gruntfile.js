module.exports = function(grunt) {
    grunt.initConfig({
        watch: {
            express: {
                files: ['**/*.js', '!**/node_modules/**' ],
                tasks: ['express:dev'],
                options: {
                    spawn: false // Without this option specified express won't be reloaded
                }
            }
        },
        express: {
            options: {
                // Override defaults here
                port: 3017,
            },
            dev: {
                options: {
                    script: 'server-static-fortiden.js'
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
        }
    });
    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('static-server', ['express:dev', 'watch'])
}
