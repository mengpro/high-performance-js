module.exports = {
    css: {
        sourceMap: true,
    },
    // productionSourceMap: false,
    lintOnSave: 'error',
    // 避免静态资源请求时附带Cookie，最终目的是减少资源请求包的大小
    crossorigin: 'anonymous',
    // 保证资源的安全性，避免劫持后的安全问题
    integrity: true,

    devServer: {
        open: true,
        proxy: {
            '/*Back': {
                target: 'http://10.1.13.86/',
                changeOrigin: true,
                // 删除Set-Cookie 首部中的Domain信息，则按默认值处理
                // 另外的细节
                // 浏览器对Port的处理存在差异，这是同源策略中的灰色地带，即:80端口的Cookie在Chrome等其他浏览器中会发送到:8080，而Firefox不会）。
                cookieDomainRewrite: '',
            },
        },
    },
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.js$/,
                    loader: ['babel-loader', 'eslint-loader'],
                },
            ],
        },
    },
};
