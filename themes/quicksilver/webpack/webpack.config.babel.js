const path                        = require('path');
const webpack                     = require('webpack');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const {getIfUtils, removeEmpty}   = require('webpack-config-utils');
const ExtractTextPlugin           = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin        = require("mini-css-extract-plugin");
const glob                        = require('glob');
const SpritesmithPlugin           = require('webpack-spritesmith');

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
    const {ifProduction, ifNotProduction} = getIfUtils(argv.mode);

    return {
        mode   : ifProduction('production', 'development'),
        entry  : path.resolve(__dirname, '../js/app.js'),
        stats,
        devtool: 'source-map',
        output : {
            path             : path.resolve(__dirname, '../dist/scripts'),
            filename         : 'bundle.js',
            sourceMapFilename: 'bundle.map.js'
        },
        module : {
            rules: [
                {
                    test  : /\.js$/, exclude: /node_modules/,
                    loader: 'babel-loader'
                },
                {
                    test: /\.scss$/,
                    use : [
                        MiniCssExtractPlugin.loader,
                        {
                            loader : 'css-loader',
                            options: {sourceMap: true}
                        },
                        {
                            loader : 'sass-loader',
                            options: {sourceMap: true}
                        },
                        {
                            loader : 'import-glob-loader',
                            options: {sourceMap: true}
                        },
                    ]
                },
                {
                    test   : /\.(png|jpg|gif)$/,
                    loader : 'file-loader',
                    options: {
                        outputPath: '../images',
                        name      : '[name].[ext]',
                    },
                },
            ]
        },
        plugins: removeEmpty([
            new FriendlyErrorsWebpackPlugin(),
            new webpack.PrefetchPlugin(path.resolve(__dirname, '../scss/style.scss')),
            new MiniCssExtractPlugin({
                filename     : "../styles/[name].css",
                chunkFilename: "[id].css"
            }),
            new SpritesmithPlugin({
                src               : {
                    cwd : path.resolve(__dirname, '../sprites'),
                    glob: '*.png'
                },
                target            : {
                    image: path.resolve(__dirname, '../dist/images/sprites/sprite.png'),
                    css  : [
                        [path.resolve(__dirname, '../sprites/spritesmith-generated/_normal.scss'), {format: 'normal'}],
                        [path.resolve(__dirname, '../sprites/spritesmith-generated/_retina.scss'), {format: 'retina'}]
                    ]
                },
                retina            : '@2x',
                apiOptions        : {
                    cssImageRef: "~sprite.png"
                },
                customTemplates   : {
                    normal       : path.resolve(__dirname, '../sprites/sprite_positions.styl.mustache'),
                    normal_retina: path.resolve(__dirname, '../sprites/sprite_positions.styl.mustache'),
                    retina       : path.resolve(__dirname, '../sprites/retina-sprite_positions.styl.mustache'),
                    retina_retina: path.resolve(__dirname, '../sprites/retina-sprite_positions.styl.mustache'),
                },
                spritesmithOptions: {
                    padding: 4
                }
            })
        ])
    };
};