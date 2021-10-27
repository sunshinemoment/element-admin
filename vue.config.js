module.exports = {
  publicPath:
    process.env.NODE_ENV === 'production'
      ? './'
      : '/',
  css: {
    // css预设器配置项
    loaderOptions: {
      sass: {
        prependData: `@import "./src/assets/styles/variables.scss";`
      }
    }
  }
}
