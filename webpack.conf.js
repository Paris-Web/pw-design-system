const webpack = require("webpack");
const path = require("path");

module.exports = {
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  devtool:
    process.env.NODE_ENV === "production"
      ? "source-map"
      : "cheap-module-source-map",
  module: {
    rules: [
      {
        test: /\.((png)|(eot)|(woff)|(woff2)|(ttf)|(svg)|(gif))(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader?name=/[hash].[ext]"
      },
      { test: /\.json$/, loader: "json-loader" },
      {
        loader: "babel-loader",
        test: /\.js?$/,
        exclude: /node_modules/,
        query: { cacheDirectory: true }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || "production"),
        ALGOLIA_APP_ID: JSON.stringify(process.env.ALGOLIA_APP_ID),
        ALGOLIA_ADMIN_KEY: JSON.stringify(process.env.ALGOLIA_ADMIN_KEY),
        ALGOLIA_SEARCH_ONLY_API_KEY: JSON.stringify(
          process.env.ALGOLIA_SEARCH_ONLY_API_KEY
        )
      }
    })
  ],
  performance: process.env.NODE_ENV === "production" ? {} : false,

  context: path.join(__dirname, "src"),
  entry: {
    app: ["./js/app"],
    archives: ["./js/archives"],
    "admin-archives": ["./js/admin-archives"],
    hub: ["./js/hub"],
    hub_live: ["./js/hub_live"],
    styleguide: ["./js/styleguide"]
  },
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: process.env.HUGO_BASEURL || "/",
    filename: "[name].js"
  },
  node: {
    fs: "empty"
  }
};
