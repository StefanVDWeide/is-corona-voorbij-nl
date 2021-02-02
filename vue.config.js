module.exports = {
  configureWebpack: {
    externals: {
      moment: "moment"
    },
    resolve: {
      alias: {
        "chart.js": "chart.js/dist/Chart.min.js"
      }
    }
  }
};
