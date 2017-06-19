import path from 'path'

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
            }
        ]
    },
    devServer: {
        contentBase: './dist',
        port: 3000,
        inline: true,
        hot: true
    }
};