const webpack = require('webpack');
const path = require("path");
const config = require('../config')
const vendors = [
  "vue/dist/vue.esm.js", 
  "vue-router",
  "vuex", 
  "element-ui",
  "lodash", 
  "axios"
];
module.exports = {
  resolve: {
		extensions: [".js", ".vue"]
	},
  entry: {
    vendor: vendors,
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    library: '[name]'
  },
  plugins: [
     new webpack.DllPlugin({
         context: path.resolve(__dirname, '.'),//__dirname,
         name: "vendor",
         path: path.join(__dirname, "manifest.json"),
       }),
     new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
  ],
};