const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
var ForkTsCheckerNotifierWebpackPlugin = require('fork-ts-checker-notifier-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CheckerPlugin } = require('awesome-typescript-loader')
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
            // {
            //     test: /\.tsx?$/,
            //     exclude: /node_modules/,
            //     use: [
            //         { loader: 'cache-loader' },
            //         {
            //             loader: 'thread-loader',
            //             options: {
            //                 // there should be 1 cpu for the fork-ts-checker-webpack-plugin
            //                 workers: require('os').cpus().length - 1,
            //                 poolTimeout: Infinity, // set this to Infinity in watch mode - see https://github.com/webpack-contrib/thread-loader
            //             },
            //         },
            //         {
            //             loader: 'ts-loader',
            //             options: {
            //                 // disable type checker - we will use it in fork plugin
            //                 transpileOnly: true,
            //                 happyPackMode: true,
            //             },
            //         },
            //     ],
            // },
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader',
            }
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
        new CheckerPlugin()
    ],
};
