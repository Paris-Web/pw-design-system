import webpack from "webpack";
import path from "path";

export default {
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  devtool:
    process.env.NODE_ENV === "production" ? "none" : "cheap-module-source-map",
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
    new webpack.ProvidePlugin({
      fetch: "imports-loader?this=>global!exports?global.fetch!whatwg-fetch"
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || "production")
      }
    })
  ],
  performance: process.env.NODE_ENV === "production" ? {} : false,

  context: path.join(__dirname, "src"),
  entry: {
    app: ["./js/app"],
    styleguide: ["./js/styleguide"],
    ["service-worker"]: ["./js/service-worker/worker/index.js"]
  },
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: process.env.HUGO_BASEURL || "/",
    filename: "[name].js"
  }
};
