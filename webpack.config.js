const HTMLWebpackPlagin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlagin({
            template: './src/index.html',
            filename: 'index.html'
        }),
        
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ]
}