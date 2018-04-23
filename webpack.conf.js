import webpack from "webpack";
import path from "path";

export default {
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
    new webpack.ProvidePlugin({
      fetch: "imports-loader?this=>global!exports?global.fetch!whatwg-fetch"
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || "production")
      }
    })
  ].concat(
    process.env.NODE_ENV === "production"
      ? [
          new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: { warnings: false }
          })
        ]
      : []
  ),

  context: path.join(__dirname, "src"),
  entry: {
    app: ["./js/app"],
    styleguide: ["./js/styleguide"]
  },
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: process.env.HUGO_BASEURL || "/",
    filename: "[name].js"
  },
  externals: [/^vendor\/.+\.js$/]
};
