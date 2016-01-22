/**
 * Created by Ron on 07/01/2016.
 */
SystemJS.config({
    defaultJSExtensions: true,
    paths: {
        '../*': '../*',
        './*': './*',
        '*': './node_modules/*'
    },
    packageConfigPaths: ['./node_modules/*/package.json'],
    map: {
        'crypto': "@empty"
    }
});