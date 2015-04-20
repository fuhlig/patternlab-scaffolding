module.exports = {
    options: {
        // require: 'sass-globbing',
        includePaths: [
            'bower_components/'
        ],
        sourcemap: false
    },
    dev: {
        options: {
            style: 'nested',
            sourceComments: true
        },
        files: {
            'public/css/style.css': 'source/css/style.scss'
        }
    },
    cms: {
        options: {
            style: 'compressed'
        },
        files: {
            '<%= globalConfig.cms %>/css/style.css': 'source/css/style.scss'
        }
    }
};
