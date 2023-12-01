const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // mode
  mode: "development", // production
  // entry
  entry: {
    main: path.resolve(__dirname, "src/js/main.js"),
    about: path.resolve(__dirname, "src/js/about.js"),
  },
  // output
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name][contenthash].js",
    clean: true,
  },
  // devServer
  // loader
  // plugins
  plugins: [
    new htmlWebpackPlugin({
      title: "Countires | Home",
      template: "./src/indexTemp.html",
      filename: "index.html",
      chunks: ["main"],
    }),

    new htmlWebpackPlugin({
      title: "Countires | About",
      template: "./src/pages/aboutTemp.html",
      filename: "about.html",
      chunks: ["about"],
    }),
  ],
};
