module.exports = {
    chainWebpack: (config) => {
        config.plugins.delete("prefetch");
    },
    devServer: {
        https: false,
    },
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.html$/,
                    loader: "vue-template-loader",
                    exclude: /index.html/,
                },
            ],
        },
    },
};
