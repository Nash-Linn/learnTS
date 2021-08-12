//引入一个包

const path = require('path');

const HTMLWebpackPlugin = require('html-webpack-plugin')

const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const { resolve } = require('path');

//webpack中的所有的配置信息都应该写在module.exports
module.exports = {
  //指定入口文件
  entry: "./src/index.ts",

  //指定打包文件所在目录
  output: {
    //指定打包文件的目录
    path: path.resolve(__dirname,'dist'),
    //打包后文件的名字
    filename:'bundele.js',

    environment:{
      //告诉webpack不使用箭头函数
      arrowFunction:false
    }
  },

  //指定webpack打包时要使用的模块
  module:{
    //指定要加载的规则
    rules:[
      {
        //test 指定规则生效文件
        test:/\.ts$/,
        //使用 ts-loader 去处理 .ts 结尾的文件
        use:[   //执行顺序从后往前
          //配置babel
          {
            //指定加载器
            loader:"babel-loader",
            //设置bable
            options:{
              //设置预定义的环境
              presets:[
                [
                  //指定环境的插件
                  '@babel/preset-env',
                  //配置信息
                  {
                    //要兼容的目标浏览器
                    targets:{
                      'chrome':'50',
                      'ie':'11'
                    },
                    //指定corejs的版本
                    'corejs':'3',
                    //使用corejs的方式  'usage'表示按需加载
                    'useBuiltIns':'usage'
                  }
                ]
              ]
            }
          },
          'ts-loader',
        ],
        //要排除的文件
        exclude:/node-modules/
      }
    ]
  },

  //配置Webpack插件
  plugins:[
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin(
      {
        // title:'这是一个自定义的title'
        template:"./src/index.html"
      }
    ),
  ],

  //用来设置引用的模块

  resolve:{
    extensions: ['.ts', '.js']
  }

}