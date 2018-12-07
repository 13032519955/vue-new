const webpack = require('webpack');
const path = require("path");
const config = require('../config')
const utils = require('./utils')
let ExtractTextPlugin = require('extract-text-webpack-plugin');
const vendors = [
  "vue/dist/vue.esm.js", 
  "vue-router",
  "vuex", 
  "element-ui",
  "lodash", 
  "axios",
  'element-ui/lib/theme-chalk/index.css'
];
//element-ui/lib/theme-chalk/index.css
module.exports = {
  resolve: {
		extensions: [".js", ".vue"]
	},
  entry: {
    vendor: vendors
  },
  output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath('js/[name].js'),
    library: '[name]'
  },
  module: {
    rules: [
      // This is required
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract(['css-loader']),
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin(utils.assetsPath('css/vendor.css')),
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