module.exports = {
  css: {
    // css预设器配置项
    loaderOptions: {
      sass: {
        prependData: `@import "./src/assets/styles/variables.scss";`
      }
    }
  }
}
