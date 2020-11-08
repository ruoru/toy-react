const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: "./main.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: [
              [
                "@babel/plugin-transform-react-jsx",
                { pragma: "createElement" },
              ],
            ],
          },
        },
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: "./index.html" })],
  mode: "development",
  optimization: {
    minimize: false,
  },
};
