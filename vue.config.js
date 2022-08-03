const { defineConfig } = require('@vue/cli-service')
const path = require("path");
// 打包优化start

// 打包优化end
module.exports = defineConfig({
  transpileDependencies: true,
  // 打包优化配置start
  // 解决打包后打开是空白页面
  publicPath: "./",
  productionSourceMap: false,
  // 打包优化end

  // less换肤主题配置
  lintOnSave: false,
    pluginOptions: {
        "style-resources-loader": {
            preProcessor: "less",
            patterns: [
                // 此处是核心样式变量,这里配置相当于所有vue文件都可以用了
                path.resolve(__dirname, "./src/theme/style.less"),
            ],
        },
    },
})
