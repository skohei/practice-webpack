const path = require('path');

module.exports = {
    mode: 'development',
    entry: './dev/js/index.js',
    output: {
        path: path.resolve(__dirname, 'assets/js/'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    }
}