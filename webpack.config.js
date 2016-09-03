module.exports = {
    entry: './main.js',
    output: {
        //path: './',
        path: __dirname + '/',
        //publicPath: __dirname + '/',
        //filename: __dirname + '/index.js'
        filename: 'index.js'
    },
    devServer: {
        inline: true,
        port: 8080
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015','react']
                }

            }
        ]
    }
}
