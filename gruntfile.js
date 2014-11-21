module.exports = function(grunt) {
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
    grunt.initConfig({
        pkg: grunt.file.readJSON('bower.json'),
        dir: {
            publish: 'public',
            theme: 'theme',
            build:'.build',
            vendor:{
                bower:'bower_components'
            }
        },

        // Javascript processing
        // minify to build then uglify to publish
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= pkg.version %> */\n'
            },
            libs: {
                files: {
                    '<%= dir.publish %>/js/libs.min.js': [
                        '<%= dir.vendor.bower %>/jquery/dist/jquery.min.js',
                        '<%= dir.vendor.bower %>/bootstrap-sass/dist/js/bootstrap.min.js',
                        '<%= dir.vendor.bower %>/lodash/dist/lodash.min.js',
                        '<%= dir.vendor.bower %>/moment/moment.js',
                    ]
                }
            },
        },

        // stylesheet processing
        // compile sass to build,
        sass: {
            build: {
                options: {
                    style: 'expanded'
                },
                files: {
                    '<%= dir.build %>/stylesheets/<%= pkg.name %>.css': '<%= dir.theme %>/stylesheets/<%= pkg.name %>.scss',
                }
            }
        },
        // css minify to publish
        cssmin: {
            publish: {
                options: {
                    banner: '/*! <%= pkg.name %> <%= pkg.version %> */',
                    keepSpecialComments: 0
                },
                files: {
                    '<%= dir.publish %>/<%= pkg.name %>.min.css': ['<%= dir.build %>/stylesheets/<%= pkg.name %>.css']
                }
            }
        },

        // copy images and fonts that don't need processing
        copy: {
            libs: {
                files: [{
                    expand: true,
                    flatten: true,
                    src: ['<%= dir.vendor.bower %>/**/{*.png,*.jpg,*.gif}'],
                    dest: '<%= dir.publish %>/img',
                    filter: 'isFile'
                }, {
                    expand: true,
                    flatten: true,
                    src: ['<%= dir.vendor.bower %>/**/{*.eot,*.svg,*.ttf,*.woff,*.otf}'],
                    dest: '<%= dir.publish %>/fonts',
                    filter: 'isFile'

                }]
            },
            theme: {
                files: [{
                    expand: true,
                    flatten: true,
                    src: ['<%= dir.theme %>/images/**'],
                    dest: '<%= dir.publish %>/img',
                    filter: 'isFile'
                }, {
                    expand: true,
                    flatten: true,
                    src: ['<%= dir.theme %>/fonts/**'],
                    dest: '<%= dir.publish %>/fonts',
                    filter: 'isFile'

                }]
            }
        },

        // always clean up the build and publish dirs
        clean: {
            build:['<%= dir.build %>/'],
            publish: [
                '<%= dir.publish %>/<%= pkg.name %>.min.css',
                '<%= dir.publish %>/js',
                '<%= dir.publish %>/fonts',
                '<%= dir.publish %>/img',
            ]
        },

        // keeping 'em on the straight and narrow
        jshint: {
            files: ['gruntfile.js', '<%= dir.theme %>/javascript/**/*.js', 'test/**/*.js'],
            options: {
                // options here to override JSHint defaults
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true
                }
            }
        },
        watch: {
            css: {
                files: ['<%= dir.theme %>/stylesheets/**/*'],
                tasks: ['sass', 'cssmin'],
            },
            assets: {
                files: ['<%= dir.theme %>/images/**/*', '<%= dir.theme %>/fonts/**/*'],
                tasks: ['copy'],
            },
            scripts: {
                files: ['<%= dir.theme %>/javascript/*'],
                tasks: ['uglify:theme'],
            },
        },

    });

    grunt.registerTask('default', ['jshint', 'clean', 'sass', 'cssmin', 'uglify', 'copy']);
    grunt.registerTask('develop', ['default', 'watch']);
};