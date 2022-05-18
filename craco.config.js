/*
 * @Author: 张帮辉
 * @LastEditors: 张帮辉
 * @Date: 2022-05-18 11:46:59
 * @LastEditTime: 2022-05-18 11:55:21
 * @Description: file content
 */
const path = require("path");

module.exports = {
  webpack: {
    // output: {
    //   path: path.resolve(__dirname, "docs"),
    // },
    // publicPath: "/daily-vocabulary/",
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
};
