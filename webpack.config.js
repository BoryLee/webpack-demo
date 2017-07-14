/**
 * Created by bory on 2017/7/13.
 */
//Node提供的path模块了，用于处理文件路径
var path = require('path');

var webpack = require('webpack');//访问内置的插件

var env = process.env.NODE_ENV;//环境变量

var config = {
    //source map
    devtool:'eval-source-map',

    //定义了打包的入口文件，所有文件会按顺序打包。每个文件进行依赖的递归查找，直到所有相关模块都被打包。
    entry:{
        buyer:'./buyer/index.js',
        seller:'./seller/index.js'
    },

    //打包完的输出文件
    output:{
        path:path.resolve(__dirname,'dist'),//打包输出晚间的目录
        filename:'[name].bundle.js'//打包输出的文件名
    },

    module:{
        rules:[
            { test: /\.css$/, use: ['style-loader','css-loader'] } ,
            {test:/\.jpg/,use:['file-loader']}
        ]
    },
    plugins:[
        new webpack.BannerPlugin("版权说明：版权归我个人所有"),//版权说明插件
        new webpack.optimize.UglifyJsPlugin()//代码压缩插件
    ]

};


module.exports = config;