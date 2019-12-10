const path = require("path");

module.exports = {
  entry: ["./src/index.tsx"],
  output: {
    path: path.join(__dirname, "public/js"),
    filename: "bundle.js"
  },
  resolve: {
    modules: ["node_modules"],
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /(\.ts|\.tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"]
            }
          },
          {
            loader: "ts-loader"
          }
        ]
      }
    ]
  }
};
