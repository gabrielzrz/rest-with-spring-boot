const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
      proxy: {
        '/zorzi/api': {
          target: 'http://localhost:8080',
          changeOrigin: true
        }
      }
    }
})
