const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
    mode: "development", // 模式
    entry: "./src/main.js", // 入口文件
    output: {
        // 输出文件配置
        filename: "index.js",
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: "images/[name][ext]" // 自定义输出文件名
    },
    // 项目路径别名
    resolve: {
        alias: {
            "@": path.join(__dirname, "src/")
        }
    },
    // 模块
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: "vue-loader"
                    }
                ]
            }, // vue 资源加载器
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                type: "asset/resource"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./public/index.html",
            favicon: path.join(__dirname, "./public/favicon.ico"), // favicon路径
            title: "脚手架"
        }),
        new VueLoaderPlugin()
    ],
    devServer: {
        compress: true, // 启用gzip压缩
        port: 8090,
        open: true // 打开浏览器
    }
};
