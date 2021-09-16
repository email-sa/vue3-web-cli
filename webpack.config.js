const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin"); // 友好的错误提示

// 获取当前的ip地址
const getIPAdress = function() {
    let interfaces = require("os").networkInterfaces(); // 获得网络接口列表 该方法返回一个对象，包含只有被赋予网络地址的网络接口
    for (let devName in interfaces) {
        let iface = interfaces[devName];
        for (let i = 0; i < iface.length; i++) {
            let alias = iface[i];
            if (
                alias.family === "IPv4" &&
                alias.address !== "127.0.0.1" &&
                !alias.internal
            ) {
                return alias.address;
            }
        }
    }
};

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
        new VueLoaderPlugin(),
        // new webpack.HotModuleReplacementPlugin(),
        new FriendlyErrorsPlugin({
            compilationSuccessInfo: {
                messages: [
                    "App runing at:",
                    `Local: http://localhost:8090`,
                    `Network: http://${getIPAdress()}:8090`
                ]
            }
            // onErrors: config.dev.notifyOnErrors
            //     ? utils.createNotifierCallback()
            //     : undefined
        })
    ],
    devServer: {
        compress: true, // 启用gzip压缩
        // host: require("ip").address(),
        // host: "0.0.0.0", // 设置为0.0.0.0并配合useLocalIp可以局域网访问
        // hot: true,
        port: 8090,
        // open: true // 打开浏览器
        host: "0.0.0.0", // 设置为0.0.0.0并配合useLocalIp可以局域网访问
        useLocalIp: true, // 使用本机IP打开devServer，而不是localhost
        open: "chrome"
    }
};
