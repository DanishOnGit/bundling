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
      template: "./index.html",
    })
  ],
  resolve: {
    extensions: [".js", ".jsx"], // Allow importing without file extensions
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Apply Babel on JS and JSX files
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
