/**
 * Created by ronze on 9/1/2016.
 */
const webpack = require('webpack');
const path = require('path');
module.exports = {
    context: __dirname,
    entry: './src/bootstrap.ts',
    debug: true,
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'bundle'),
        publicPath: '/bundle/',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', 'd.ts', '.ts', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: [
                    'ts-loader'
                ],
                include: [path.resolve(__dirname, 'src')]
            }
        ]
    }
};
