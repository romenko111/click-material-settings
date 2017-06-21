import webpack from 'webpack'
import path from 'path'
import autoprefixer from 'autoprefixer'
import cssImport from 'postcss-import'
import cssNext from 'postcss-cssnext'

const src = path.resolve(__dirname, 'src')
const dist = path.resolve(__dirname, 'dist')

export default {
    entry: {
        index: path.resolve(src, 'index.js')
    },
    output: {
        path: dist,
        filename: "index.js",
        library: "Settings",
        libraryTarget: "var"
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.js[x]?$/,
                exclude: /node_modules/
            }, {
                test: /\.(sass|scss)$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: { modules: true }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function() {
                                return [
                                    cssImport({
                                        addDependencyTo: webpack
                                    }),
                                    cssNext
                                ]
                            }
                        }
                    },
                    'sass-loader'
                ]
            }, {
                test: /\.css$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            importLoaders: 1,
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function () {
                                return [
                                    cssImport({
                                        addDependencyTo: webpack
                                    }),
                                    cssNext
                                ]
                            }
                        }
                    }
                ]
            },
        ]
    },
    devServer: {
        contentBase: './dist',
        port: 3000,
        inline: true,
        hot: true
    }
};