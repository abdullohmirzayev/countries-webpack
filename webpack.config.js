const path = require("path");

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
  // module
  // plugins
};
