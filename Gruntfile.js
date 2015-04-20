module.exports = function(grunt) {

    require('time-grunt')(grunt);
    require('jit-grunt')(grunt);

    var globalConfig = {
        // Adjust this value to the assets destination path of your cms
        cms: 'cms'
    };



    require('load-grunt-config')(grunt, {
        jitGrunt: {},
        config: {
            globalConfig: globalConfig
        }
    });


    grunt.registerTask('scss', [
        'sass_globbing',
        'sass',
        'autoprefixer'
    ]);

    grunt.registerTask('js', [
        'copy:js_public',
        'concat',
        'uglify'
    ]);

    // Default task.
    grunt.registerTask('default', [
        'clean',
        'concat',
        'copy',
        'uglify',
        'sass_globbing',
        'concurrent',
        'connect:server',
        'watch'
    ]);

    // BorwserSync task.
    grunt.registerTask('sync', [
        'clean',
        'concat',
        'copy',
        'uglify',
        'concurrent',
        'browserSync',
        'watch'
    ]);

};
