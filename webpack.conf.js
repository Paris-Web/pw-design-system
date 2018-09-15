import webpack from "webpack";
import path from "path";

const config = {
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  devtool:
    process.env.NODE_ENV === "production" ? "none" : "cheap-module-source-map",
  module: {
    rules: [
      {
        test: /\.((png)|(eot)|(woff)|(woff2)|(ttf)|(svg)|(gif))(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader?name=/[hash].[ext]"
      },
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
      fetch:
        "imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch"
    })
  ],
  performance: process.env.NODE_ENV === "production" ? {} : false,

  context: path.join(__dirname, "src"),
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: process.env.HUGO_BASEURL || "/",
    filename: "[name].js"
  },
  node: {
    dgram: "empty",
    fs: "empty",
    net: "empty",
    tls: "empty",
    child_process: "empty"
  }
};

export default [
  // Styleguide config
  {
    ...config,
    plugins: [
      ...config.plugins,
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV || "production"),
          PUBLIC_URL: JSON.stringify(process.env.HUGO_BASEURL || "/"),
          ENV: JSON.stringify("styleguide")
        }
      })
    ],
    entry: {
      styleguide: ["./js/styleguide"],
      ["styleguide-service-worker"]: ["./js/service-worker/worker/index.js"]
    }
  },
  // Production config (assets used on the official website)
  {
    ...config,
    plugins: [
      ...config.plugins,
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV || "production"),
          PUBLIC_URL: JSON.stringify(process.env.HUGO_BASEURL || "/"),
          ENV: JSON.stringify("production")
        }
      })
    ],
    entry: {
      app: ["./js/app"],
      ["service-worker"]: ["./js/service-worker/worker/index.js"]
    }
  }
];
