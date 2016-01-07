/**
 * Created by Ron on 07/01/2016.
 */
var path = require("path");
var Builder = require("systemjs-builder");

var builder = new Builder();
builder.loadConfig('./config.js').then(function () {
    builder.buildStatic('./app/boot', 'bundle.min.js', { minify: true, sourceMaps: true });
});
