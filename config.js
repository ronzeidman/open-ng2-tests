/**
 * Created by Ron on 07/01/2016.
 */
System.config({
    defaultJSExtensions: true,
    paths: {
        './*': './*',
        '*': './node_modules/*'
    },
    packageConfigPaths: ['./node_modules/*/package.json'],
    map: {
        'crypto': "@empty"
    }
});