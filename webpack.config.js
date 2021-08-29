const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const getBaseUrl = (() => {
  let baseUrl = process.env.HUGO_BASEURL || "/";
  if (!baseUrl.endsWith("/")) {
    baseUrl += "/";
  }
  return baseUrl;
})();

module.exports = {
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  devtool:
    process.env.NODE_ENV === "production"
      ? "source-map"
      : "cheap-module-source-map",
  module: {
    rules: [
      {
        test: /\.(woff|ttf|otf|eot|woff2|svg|png)$/i,
        type: "asset/resource"
      },
      {
        loader: "babel-loader",
        test: /\.js?$/,
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              url: false,
            }
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-url",
                    {
                      filter: "**/fonts/**/*",
                      url: asset => {
                        console.log(asset)
                        return getBaseUrl + asset.url.replace(/^\//, "");
                      }
                    }
                  ]
                ]
              }
            }
          },
        ],
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify(process.env.NODE_ENV || "development"),
        "ALGOLIA_APP_ID": JSON.stringify(process.env.ALGOLIA_APP_ID),
        "ALGOLIA_ADMIN_KEY": JSON.stringify(process.env.ALGOLIA_ADMIN_KEY),
        "ALGOLIA_SEARCH_ONLY_API_KEY": JSON.stringify(
          process.env.ALGOLIA_SEARCH_ONLY_API_KEY
        )
      }
    }),
    new MiniCssExtractPlugin({
      filename: "../css/[name]"
    })
  ],
  performance: process.env.NODE_ENV === "production" ? {} : false,
  devServer: {
    compress: true,
    port: 3000,
    static: {
      directory: path.join(__dirname, "./dist"),
      watch: true,
    },
    devMiddleware: {
      index: "index.html",
      writeToDisk: true,      
    }
  },
  context: path.join(__dirname, "src"),
  entry: {
    app: ["./js/app"],
    archives: ["./js/archives"],
    "admin-archives": ["./js/admin-archives"],
    hub: ["./js/hub"],
    hub_live: ["./js/hub_live"],
    styleguide: ["./js/styleguide"],
    "hub.css": ["./css/hub.css"],
    "main.css": ["./css/main.css"],
    "styleguide.css": ["./css/styleguide.css"],
    "styleguide-hub.css": ["./css/styleguide-hub.css"]
  },
  output: {
    path: path.join(__dirname, "dist", "js"),
    publicPath: process.env.HUGO_BASEURL || "/",
  },
  resolve: {
    fallback: {
      "document": false,
      "fs": false,
      "path": false
    },
  }
};
