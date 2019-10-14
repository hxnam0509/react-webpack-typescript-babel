const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
var ForkTsCheckerNotifierWebpackPlugin = require('fork-ts-checker-notifier-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const APP_PATH = path.resolve(__dirname, 'src');

module.exports = {
    entry: APP_PATH,

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },

    resolve: {
        extensions: [
            '.ts',
            '.tsx',
            '.js',
            '.json',
        ],
    },

    module: {
        rules: [
            // { test: /\.(ts|js)x?$/, loader: 'babel-loader', exclude: /node_modules/ },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    // disable type checker - we will use it in fork plugin
                    transpileOnly: true,
                },
            },
        ],
    },

    devServer: {
        overlay: {
            warnings: true,
            errors: true,
        },
    },

    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: path.join(APP_PATH, 'index.html'),
        }),
        new ForkTsCheckerWebpackPlugin({
            async: false,
            checkSyntacticErrors: true,
        }),
        new ForkTsCheckerNotifierWebpackPlugin({
            title: 'TypeScript',
            alwaysNotify: true,
        }),
    ],
};
