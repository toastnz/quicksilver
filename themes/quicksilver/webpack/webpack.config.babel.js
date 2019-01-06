const path                        = require('path');
const webpack                     = require('webpack');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const { getIfUtils, removeEmpty } = require('webpack-config-utils');
const ExtractTextPlugin           = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin        = require("mini-css-extract-plugin");

const stats = {
    colors      : true,
    hash        : false,
    version     : false,
    timings     : false,
    assets      : false,
    chunks      : false,
    modules     : false,
    reasons     : false,
    children    : false,
    source      : false,
    errors      : false,
    errorDetails: false,
    warnings    : false,
    publicPath  : false
};

module.exports = (env, argv) => {
    const { ifProduction, ifNotProduction } = getIfUtils(argv.mode);

    return {
        mode   : ifProduction('production', 'development'),
        entry  : path.resolve(__dirname, '../js/app.js'),
        stats,
        output : {
            path             : path.resolve(__dirname, '../dist/scripts'),
            filename         : 'bundle.js',
            sourceMapFilename: 'bundle.map.js'
        },
        module : {
            rules: [
                { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
                {
                    test: /\.(sa|sc|c)ss$/,
                    use : [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'postcss-loader',
                        'sass-loader',
                    ],
                }

                //{
                //    test: /\.css$/,
                //    use : [
                //        {
                //            loader : MiniCssExtractPlugin.loader,
                //            options: {
                //                publicPath: '../'
                //            }
                //        },
                //        "css-loader"
                //    ]
                //}
            ]
        },
        plugins: removeEmpty([
            new FriendlyErrorsWebpackPlugin(),
            new webpack.PrefetchPlugin(path.resolve(__dirname, '../scss/style.scss')),
            new MiniCssExtractPlugin({
                filename     : "[name].css",
                chunkFilename: "[id].css"
            })
        ])
    }
};