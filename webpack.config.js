const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: "./main.js",
  },
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    clean: true, //deletes old build files
  },
  devServer: {
    compress: true,
    static: {
      directory: path.join(__dirname, "dist"), // Serve files from the dist folder
    },
    port: 8081, // Default port
    open: true, // Automatically open the browser
    hot: true, // Enable hot module replacement (HMR)
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html", // Use your own HTML file
      title: "Merchant Entries",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
