const { merge } = require('webpack-merge');
const commonConfiguration = require('./webpack.common');
const { CleanWebpackPlugin } = require('clear-webpack-plugin');

module.exports = merge(commonConfiguration,{
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin()
    ]
})