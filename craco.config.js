const path = require("path");

module.exports = process.env.NODE_ENV === 'production' ? {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      paths.appBuild = "docs";
      webpackConfig.output = {
        ...webpackConfig.output,
        path: path.resolve(__dirname, "docs"),
        publicPath: "/daily-vocabulary/",
      };
      return webpackConfig
    },
  },
} : {}
