module.exports = {
    runtimeCompiler: true,
    publicPath: process.env.NODE_ENV === 'production' ?
        '/cicek-sepeti/' :
        '/',
    chainWebpack: config => {
        config
        .plugin('html')
        .tap(args => {
            args[0].title = 'Çiçek Sepeti'
            return args
        })
    },
    configureWebpack: {
        devtool: 'source-map'
    }
}