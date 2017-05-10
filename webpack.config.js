var webpack = require("webpack");
var path = require("path");
module.exports={
  entry:"./src/main.js",
  output:{
    path:path.resolve(__dirname,'./dist'),
    filename:"main.bundle.js"
  },
  module:{
    rules:[
      {
        test:/\.js$/,
        loader:'babel-loader',
        exclude:/node_modules/
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  }
}