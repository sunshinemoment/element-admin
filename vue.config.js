module.exports = {
  publicPath:
    process.env === 'production'
      ? 'https://sunshinemoment.github.io/element-admin'
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
