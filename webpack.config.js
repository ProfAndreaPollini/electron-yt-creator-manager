
const { merge } = require("webpack-merge")
const nodeExternals = require('webpack-node-externals');

const baseConfig = {
    module: {
        rules: [
            {
                test: /\.tsx$/,
                use: "ts-loader",
                exclude: [/node_modules/, /release-build/]
            }
        ],

    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".jsx", ".scss"]
    },
    optimization: {
        minimize: false
    }
}

const nodeConfig = {
    entry: {
        main: {
            import: "./src/main.ts",
            filename: "main.js"
        }
    },

    target: "node",
    externalsPresets: { node: true },
    externals: [nodeExternals()],
}
const appConfig = {
    target: "web",
    entry: {
        app:
        {
            import: "./src/app.tsx",
            filename: "[name].js"
        }
    }
}

// {
//     entry: {
//         main: './src/main.ts',
//         app: './src/app.ts'
//     },
// }


module.exports = [merge(baseConfig, nodeConfig), merge(baseConfig, appConfig)]