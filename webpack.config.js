const path = require("path"),
  HTMLWebpackPlugin = require("html-webpack-plugin"),
  CleanWebpackPlugin = require("clean-webpack-plugin"),
  webpack = require("webpack"),
  HtmlWebpackHarddiskPlugin = require("html-webpack-harddisk-plugin");

module.exports = {
  mode: "development",
  entry: {
    app: "./src/index.js"
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    watchContentBase: true,
    hot: true,
    inline: true,
    port: 8080
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      alwaysWriteToDisk: true,
      hash: true,
      inject: "body",
      template: path.resolve(__dirname, "src/index.html"),
      filename: path.resolve(__dirname, "dist/index.html")
    }),
    new HtmlWebpackHarddiskPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [{
        test: /(\.css|\.scss)$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          },
          "postcss-loader"
        ]
      },
      {
        test: /(\.jsx|\.js)$/,
        use: [
          'babel-loader',
	  {
            loader:'eslint-loader',
            options: {
              fix: true
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  }
};
