var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
        'script!jquery/dist/jquery.min.js',
        'script!foundation-sites/dist/foundation.min.js',
        './app/app.jsx'
    ],
    externals: {
        jquery: 'jQuery'
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery'
        })
    ],
    output: {
        path: __dirname,
        modulesDirectories: [
            'node_modules',
            './app/components'
        ],
        filename: './public/bundle.js'
    },
    resolve: {
        root: __dirname,
        alias: {
            applicationStyles: 'app/styles/app.scss',
            TodoApp: 'app/components/TodoApp',
            TodoList: 'app/components/TodoList',
            Todo: 'app/components/Todo',
            AddTodo: 'app/components/AddTodo',
            TodoSearch : 'app/components/TodoSearch'
        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    sassLoader: {
        includePaths: [
            path.resolve(__dirname, './node_modules/foundation-sites/scss')
        ]
    },
    devtool: 'cheap-module-eval-source-map'
};
