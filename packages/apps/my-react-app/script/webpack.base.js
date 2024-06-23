const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

function getStyleLoader(isDev) {
  return isDev ? "style-loader" : MiniCssExtractPlugin.loader;
}

module.exports = function (isDev) {
  return {
    entry: path.resolve(__dirname, "../src/index.tsx"),

    output: {
      path: path.resolve(__dirname, "../dist"),
      filename: "static/js/[name].[contenthash:8].js",
      clean: true,
      publicPath: "/",
    },

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "../src"),
      },
      extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
    },

    module: {
      rules: [
        {
          test: /\.(tsx|ts|jsx|js)$/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          oneOf: [
            {
              test: /\.module\.(less|css)$/,
              include: [path.resolve(__dirname, "../src")],
              use: [
                getStyleLoader(isDev),
                {
                  loader: "css-loader",
                  options: {
                    modules: {
                      localIdentName: "[name]_[local]-[hash:base64:5]",
                    },
                  },
                },
                "postcss-loader",
                "less-loader",
              ],
            },
            {
              test: /\.css$/,
              use: [getStyleLoader(isDev), "css-loader", "postcss-loader"],
            },
            {
              test: /\.less$/,
              use: [
                getStyleLoader(isDev),
                "css-loader",
                "postcss-loader",
                "less-loader",
              ],
            },
          ],
        },
        {
          test: /\.(png|jpe?g|webp|git|svg)$/,
          generator: {
            filename: "static/images/[name].[contenthash:8][ext]",
          },
        },
        {
          test: /\.(mp3|mp4|wmv|flv|rvmb)$/,
          generator: {
            filename: "static/media/[name].[contenthash:8][ext]",
          },
        },
        {
          test: /\.(woff2?|eot|ttf|otf)$/,
          generator: {
            filename: "static/fonts/[name].[contenthash:8][ext]",
          },
        },
      ],
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "../public/index.html"),
        title: "Mono My React App",
      }),
      new MiniCssExtractPlugin({
        filename: isDev
          ? "static/css/[name].css"
          : "static/css/[name].[contenthash:8].css",
      }),
    ],
  };
};
