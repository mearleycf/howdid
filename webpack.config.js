const WebpackNotifierPlugin = require('webpack-notifier');
const path = require('path');

module.exports = {
    module : {
        rules: [
            {
                test : /\.scss$/,
                loader : 'postcss-loader',
                options: {
                    ident : 'postcss',
                    plugins: () => [
                        require('postcss-short')(),
                    ]
                }
            }
        ]
    },
    plugins: [
        new WebpackNotifierPlugin({
            alwaysNotify: true,
            title : 'How Did This List Get Made',
            contentImage: path.join(__dirname, 'image.png')
        }),
    ]
};